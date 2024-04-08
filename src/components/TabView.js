// // // import React from 'react';
// // // import { AppBar, Tab, Tabs, Typography, Box } from '@mui/material';

// // // const TabPanel = (props) => {
// // //   const { children, value, index, ...other } = props;

// // //   return (
// // //     <div
// // //       role="tabpanel"
// // //       hidden={value !== index}
// // //       id={`tabpanel-${index}`}
// // //       aria-labelledby={`tabpanel-${index}`}
// // //       style={{ height: 'calc(100vh - 48px)', /* 48px for the height of the AppBar */ }}
// // //       {...other}
// // //     >
// // //       {value === index && <Box p={3}>{children}</Box>}
// // //     </div>
// // //   );
// // // };

// // // const TabView = ({ tabs }) => {
// // //   const [value, setValue] = React.useState(0);

// // //   const handleChange = (event, newValue) => {
// // //     setValue(newValue);
// // //   };

// // //   return (
// // //     <div style={{ position: 'fixed', width: '100%', zIndex: 1000 }}>
// // //       <AppBar position="static">
// // //         <Tabs value={value} onChange={handleChange} aria-label="tabs">
// // //           {tabs.map((tab, index) => (
// // //             <Tab key={index} label={tab.title} />
// // //           ))}
// // //         </Tabs>
// // //       </AppBar>
// // //       {tabs.map((tab, index) => (
// // //         <TabPanel key={index} value={value} index={index}>
// // //           {tab.content}
// // //         </TabPanel>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // export default TabView;

// // import React from 'react';
// // import { AppBar, Tab, Tabs, Typography, Box } from '@mui/material';

// // const TabPanel = (props) => {
// //   const { children, value, index, ...other } = props;

// //   return (
// //     <div
// //       role="tabpanel"
// //       hidden={value !== index}
// //       id={`tabpanel-${index}`}
// //       aria-labelledby={`tabpanel-${index}`}
// //       style={{ height: 'calc(100vh - 48px)', /* 48px for the height of the AppBar */ }}
// //       {...other}
// //     >
// //       {value === index && <Box p={3}>{children}</Box>}
// //     </div>
// //   );
// // };

// // const TabView = ({ tabs }) => {
// //   const [value, setValue] = React.useState(0);

// //   const handleChange = (event, newValue) => {
// //     setValue(newValue);
// //   };

// //   return (
// //     <div style={{ position: 'fixed', width: '100%', zIndex: 1000, top: 0 }}>
// //       <AppBar position="static" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
// //         <Tabs
// //           value={value}
// //           onChange={handleChange}
// //           aria-label="tabs"
// //           TabIndicatorProps={{ style: { display: 'none' } }}
// //         >
// //           {tabs.map((tab, index) => (
// //             <Tab
// //               key={index}
// //               label={tab.title}
// //               style={{
// //                 flex: 1,
// //                 minWidth: 0,
// //                 width: '50%',
// //                 fontWeight: value === index ? 'bold' : 'normal',
// //                 backgroundColor: value === index ? '#f0f0f0' : 'transparent',
// //                 borderRight: value === index ? '2px solid #ccc' : 'none',
// //                 borderTopLeftRadius: index === 0 ? '4px' : 'none',
// //                 borderBottomLeftRadius: index === 0 ? '4px' : 'none',
// //                 borderTopRightRadius: index === 1 ? '4px' : 'none',
// //                 borderBottomRightRadius: index === 1 ? '4px' : 'none',
// //               }}
// //             />
// //           ))}
// //         </Tabs>
// //       </AppBar>
// //       <div style={{ width: '100%' }}>
// //         {tabs.map((tab, index) => (
// //           <TabPanel key={index} value={value} index={index}>
// //             {tab.content}
// //           </TabPanel>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default TabView;

// import React from 'react';
// import { AppBar, Tab, Tabs, Box } from '@mui/material';

// const TabPanel = (props) => {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`tabpanel-${index}`}
//       aria-labelledby={`tabpanel-${index}`}
//       style={{ height: 'calc(100vh - 48px)', /* 48px for the height of the AppBar */ }}
//       {...other}
//     >
//       {value === index && <Box p={3}>{children}</Box>}
//     </div>
//   );
// };

// const TabView = ({ tabs }) => {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div style={{ position: 'fixed', width: '100%', zIndex: 1000, top: 0 }}>
//       <AppBar position="static" style={{ backgroundColor: '#fff' }}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="tabs"
//           TabIndicatorProps={{ style: { display: 'none' } }}
//         >
//           {tabs.map((tab, index) => (
//             <Tab
//               key={index}
//               label={tab.title}
//               style={{
//                 minWidth: 0,
//                 flex: 1,
//                 fontWeight: value === index ? 'bold' : 'normal',
//               }}
//             />
//           ))}
//         </Tabs>
//       </AppBar>
//       <div style={{ marginTop: 10 }}>
//         {tabs.map((tab, index) => (
//           <TabPanel key={index} value={value} index={index}>
//             {tab.content}
//           </TabPanel>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TabView;

import React from 'react';
import { AppBar, Tab, Tabs } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const TabView = ({ tabs }) => {
  const location = useLocation();

  // Find the index of the current route in the tabs array
  const currentTabIndex = tabs.findIndex(tab => tab.path === location.pathname);

  return (
    <div style={{ position: 'fixed', width: '100%', zIndex: 1000, top: 0 }}>
      <AppBar position="static" style={{ backgroundColor: '#fff' }}>
        <Tabs
          value={currentTabIndex}
          aria-label="tabs"
          TabIndicatorProps={{ style: { display: 'none' } }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.title}
              component={Link}
              to={tab.path}
              style={{
                minWidth: 0,
                flex: 1,
                fontWeight: currentTabIndex === index ? 'bold' : 'normal',
              }}
            />
          ))}
        </Tabs>
      </AppBar>
      <div style={{ marginTop: 10 }}>
        {tabs.map((tab, index) => (
          <div key={index} style={{ display: currentTabIndex === index ? 'block' : 'none' }}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabView;

