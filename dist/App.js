import { useState } from "react"; // prop types

import PropTypes from "prop-types"; // @mui components

import { Tabs, Tab, Box } from "@mui/material";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function TabPanel(props) {
  const {
    children,
    value,
    index,
    ...other
  } = props;
  return /*#__PURE__*/_jsx(Box, {
    role: "tabpanel",
    hidden: value !== index,
    id: `tabpanel-${index}`,
    "aria-labelledby": `tab-${index}`,
    ...other,
    children: value === index && /*#__PURE__*/_jsx(Box, {
      sx: {
        p: 3
      },
      children: children
    })
  });
}

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

const SitoMUIPasswordTextfield = props => {
  const {
    id,
    name,
    className,
    color,
    content,
    tabs,
    value,
    onChange,
    tabsAtTop,
    tabsAtBottom,
    sx,
    tabsContainerSx,
    tabsSx,
    contentSx,
    style,
    icons,
    iconsPosition
  } = props;
  const [localTab, setLocalTab] = useState(0);

  const localOnChange = (event, newTab) => setLocalTab(newTab);

  return /*#__PURE__*/_jsxs(Box, {
    id: id,
    name: name,
    className: className,
    sx: {
      width: "100%",
      ...sx
    },
    style: { ...style
    },
    children: [tabsAtTop && /*#__PURE__*/_jsx(Box, {
      sx: {
        borderBottom: 1,
        borderColor: "divider",
        ...tabsContainerSx
      },
      children: /*#__PURE__*/_jsx(Tabs, {
        textColor: color,
        indicatorColor: color,
        value: value || localTab,
        onChange: onChange || localOnChange,
        sx: { ...tabsSx
        },
        children: tabs && tabs.map((item, i) => /*#__PURE__*/_jsx(Tab, {
          label: item,
          component: "a",
          icon: icons[i] || "",
          href: `#${item}`,
          iconPosition: iconsPosition[i] || "start"
        }, item))
      })
    }), content && content.map((item, i) => /*#__PURE__*/_jsx(TabPanel, {
      value: value || localTab,
      index: i,
      children: item
    }, `tc${i}`)), tabsAtBottom && /*#__PURE__*/_jsx(Box, {
      sx: {
        borderBottom: 1,
        borderColor: "divider",
        ...tabsContainerSx
      },
      children: /*#__PURE__*/_jsx(Tabs, {
        textColor: "primary",
        indicatorColor: "primary",
        value: value,
        onChange: onChange,
        sx: { ...contentSx
        },
        children: tabs.map((item, i) => /*#__PURE__*/_jsx(Tab, {
          component: "a",
          href: `#${item}`,
          label: item
        }, item))
      })
    })]
  });
};

SitoMUIPasswordTextfield.defaultProps = {
  id: undefined,
  name: undefined,
  className: undefined,
  color: "primary",
  tabsAtTop: true,
  tabsAtBottom: false,
  onChange: undefined,
  value: 0,
  sx: {},
  tabsContainerSx: {},
  tabsSx: {},
  contentSx: {},
  style: {},
  icon: [],
  iconsPosition: []
};
SitoMUIPasswordTextfield.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  tabsAtTop: PropTypes.bool,
  tabsAtBottom: PropTypes.bool,
  content: PropTypes.arrayOf(PropTypes.node).isRequired,
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func,
  icon: PropTypes.arrayOf(PropTypes.node),
  iconsPosition: PropTypes.arrayOf(PropTypes.oneOf(["start", "end", "bottom", "top"])),
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  tabsContainerSx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  tabsSx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  contentSx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  style: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
};
export default SitoMUIPasswordTextfield;