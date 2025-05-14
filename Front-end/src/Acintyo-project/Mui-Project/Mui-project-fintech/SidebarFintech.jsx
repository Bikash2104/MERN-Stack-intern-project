// import * as React from "react";
// import { extendTheme, styled } from "@mui/material/styles";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import DescriptionIcon from "@mui/icons-material/Description";
// import LayersIcon from "@mui/icons-material/Layers";
// import { AppProvider } from "@toolpad/core/AppProvider";
// import { DashboardLayout } from "@toolpad/core/DashboardLayout";
// import { PageContainer } from "@toolpad/core/PageContainer";
// import Grid from "@mui/material/Grid2";

// const NAVIGATION = [
//   {
//     kind: "header",
//     title: "Main items",
//   },
//   {
//     segment: "dashboard",
//     title: "Dashboard",
//     icon: <DashboardIcon />,
//   },
//   {
//     segment: "orders",
//     title: "Orders",
//     icon: <ShoppingCartIcon />,
//   },
//   {
//     kind: "divider",
//   },
//   {
//     kind: "header",
//     title: "Analytics",
//   },
//   {
//     segment: "reports",
//     title: "Reports",
//     icon: <BarChartIcon />,
//     children: [
//       {
//         segment: "sales",
//         title: "Sales",
//         icon: <DescriptionIcon />,
//       },
//       {
//         segment: "traffic",
//         title: "Traffic",
//         icon: <DescriptionIcon />,
//       },
//     ],
//   },
//   {
//     segment: "integrations",
//     title: "Integrations",
//     icon: <LayersIcon />,
//   },
// ];

// const demoTheme = extendTheme({
//   colorSchemes: { light: true, dark: true },
//   colorSchemeSelector: "class",
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 600,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

// function useDemoRouter(initialPath) {
//   const [pathname, setPathname] = React.useState(initialPath);

//   const router = React.useMemo(() => {
//     return {
//       pathname,
//       searchParams: new URLSearchParams(),
//       navigate: (path) => setPathname(String(path)),
//     };
//   }, [pathname]);

//   return router;
// }

// // const Skeleton = styled("div")(({ theme, height }) => ({
// //   backgroundColor: theme.palette.action.hover,
// //   borderRadius: theme.shape.borderRadius,
// //   height,
// //   content: '" "',
// // }));

// export default function DashboardLayoutBasic(props) {
//   const { window } = props;

//   const router = useDemoRouter("/dashboard");

//   // Remove this const when copying and pasting into your project.
//   const demoWindow = window ? window() : undefined;

//   return (
//     <AppProvider
//       navigation={NAVIGATION}
//       router={router}
//       theme={demoTheme}
//       window={demoWindow}
//     >
//       <DashboardLayout>
//         <PageContainer>
//           <Grid container spacing={1}>
//             <Grid size={5} />
//             {/* <Grid size={12}>
//               <Skeleton height={14} />
//             </Grid>
//             <Grid size={12}>
//               <Skeleton height={14} />
//             </Grid>
//             <Grid size={4}>
//               <Skeleton height={100} />
//             </Grid>
//             <Grid size={8}>
//               <Skeleton height={100} />
//             </Grid>

//             <Grid size={12}>
//               <Skeleton height={150} />
//             </Grid>
//             <Grid size={12}>
//               <Skeleton height={14} />
//             </Grid>

//             <Grid size={3}>
//               <Skeleton height={100} />
//             </Grid>
//             <Grid size={3}>
//               <Skeleton height={100} />
//             </Grid>
//             <Grid size={3}>
//               <Skeleton height={100} />
//             </Grid>
//             <Grid size={3}>
//               <Skeleton height={100} />
//             </Grid> */}
//           </Grid>
//         </PageContainer>
//       </DashboardLayout>
//     </AppProvider>
//   );
// }

import * as React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import {
  Box,
  Container,
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Toolbar,
  AppBar,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";

const NAVIGATION = [
  { title: "Main items", kind: "header" },
  { segment: "dashboard", title: "Dashboard", icon: <DashboardIcon /> },
  { segment: "orders", title: "Orders", icon: <ShoppingCartIcon /> },
  { kind: "divider" },
  { title: "Analytics", kind: "header" },
  { segment: "reports", title: "Reports", icon: <BarChartIcon /> },
  { segment: "sales", title: "Sales", icon: <DescriptionIcon /> },
  { segment: "traffic", title: "Traffic", icon: <DescriptionIcon /> },
  { segment: "integrations", title: "Integrations", icon: <LayersIcon /> },
];

const theme = createTheme({
  palette: { mode: "light" },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  },
});

export default function DashboardLayoutBasic() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        {/* AppBar */}
        <AppBar position="fixed" sx={{ zIndex: 1201 }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Fintech Dashboard
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Sidebar Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
          }}
        >
          <Toolbar />
          <List>
            {NAVIGATION.map((item, index) =>
              item.kind === "divider" ? (
                <Divider key={index} />
              ) : item.kind === "header" ? (
                <ListItem key={index}>
                  <Typography variant="subtitle2">{item.title}</Typography>
                </ListItem>
              ) : (
                <ListItem button key={item.segment}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
              )
            )}
          </List>
        </Drawer>

        {/* Main Content */}
        <Box component="main" sx={{ flexGrow: 1, p: 3, ml: 30 }}>
          <Toolbar />
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5">Dashboard Overview</Typography>
              </Grid>
              <Grid item xs={4}>
                <Box
                  sx={{ height: 100, bgcolor: "grey.300", borderRadius: 2 }}
                />
              </Grid>
              <Grid item xs={8}>
                <Box
                  sx={{ height: 100, bgcolor: "grey.300", borderRadius: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{ height: 150, bgcolor: "grey.300", borderRadius: 2 }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
