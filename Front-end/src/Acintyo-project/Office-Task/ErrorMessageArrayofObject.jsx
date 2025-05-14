// import React from "react";
// import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const schema = yup.object().shape({
//   name: yup.string().required("Name is required"),
//   items: yup
//     .array()
//     .of(
//       yup.object().shape({
//         title: yup.string().required("Title is required"),
//         quantity: yup
//           .number()
//           .positive()
//           .integer()
//           .required("Quantity is required"),
//       })
//     )
//     .min(1, "At least one item is required"),
// });

// const MyForm = () => {
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = (data) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label>Name:</label>
//         <input {...register("name")} />
//         {errors.name && <p>{errors.name.message}</p>}
//       </div>

//       <label>Items:</label>
//       <Controller
//         name="items"
//         control={control}
//         render={({ field }) =>
//           field.value?.map((item, index) => (
//             <div key={index}>
//               <input
//                 {...register(`items.${index}.title`)}
//                 placeholder="Title"
//               />
//               {errors.items?.[index]?.title && (
//                 <p>{errors.items[index].title.message}</p>
//               )}

//               <input
//                 {...register(`items.${index}.quantity`)}
//                 placeholder="Quantity"
//                 type="number"
//               />
//               {errors.items?.[index]?.quantity && (
//                 <p>{errors.items[index].quantity.message}</p>
//               )}
//             </div>
//           ))
//         }
//       />

//       {errors.items &&
//         typeof errors.items === "object" &&
//         errors.items.message && <p>{errors.items.message}</p>}

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default MyForm;

import React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Icon } from "@iconify/react";
import dayjs from "dayjs";

// ✅ Validation Schema using Yup
const educationSchema = yup.object().shape({
  education: yup
    .array()
    .of(
      yup.object().shape({
        schoolName: yup.string().required("School Name is required"),
        yearOfPassedOut: yup
          .string()
          .required("Year of Passed Out is required"),
        fieldOfStudy: yup.string().required("Field of Study is required"),
      })
    )
    .min(1, "At least one education record is required"),
});

const MyForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(educationSchema),
    defaultValues: {
      education: [{ schoolName: "", yearOfPassedOut: "", fieldOfStudy: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        {fields.map((field, index) => (
          <Grid container spacing={2} key={field.id} alignItems="center">
            {/* School Name */}
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="School Name"
                {...register(`education.${index}.schoolName`)}
                error={!!errors.education?.[index]?.schoolName}
                helperText={errors.education?.[index]?.schoolName?.message}
              />
            </Grid>

            {/* Year of Passed Out */}
            <Grid item xs={3}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Controller
                  name={`education.${index}.yearOfPassedOut`}
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      format="YYYY"
                      views={["year"]}
                      onChange={(date) =>
                        field.onChange(dayjs(date).format("YYYY"))
                      }
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          error: !!errors.education?.[index]?.yearOfPassedOut,
                          helperText:
                            errors.education?.[index]?.yearOfPassedOut?.message,
                        },
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>

            {/* Field of Study */}
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Field of Study"
                {...register(`education.${index}.fieldOfStudy`)}
                error={!!errors.education?.[index]?.fieldOfStudy}
                helperText={errors.education?.[index]?.fieldOfStudy?.message}
              />
            </Grid>

            {/* Remove Button */}
            <Grid item xs={1}>
              {fields.length > 1 && (
                <IconButton onClick={() => remove(index)} color="error">
                  <Icon icon="mdi:delete" />
                </IconButton>
              )}
            </Grid>
          </Grid>
        ))}

        {/* ✅ "Add More" Button Positioned at Bottom Right */}
        <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              append({ schoolName: "", yearOfPassedOut: "", fieldOfStudy: "" })
            }
          >
            + Add More
          </Button>
        </Grid>

        {/* ✅ Submit Button */}
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Button variant="contained" color="success" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default MyForm;
