import { m as j, s as k, P as f, c as y, F as s, B as u } from "./index-QhKaaYFg.js";
import { reactive as T, ref as A, watch as b } from "vue";
function c(e) {
  "@babel/helpers - typeof";
  return c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, c(e);
}
function x(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    r && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function h(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? x(Object(t), !0).forEach(function(a) {
      I(e, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return e;
}
function I(e, r, t) {
  return (r = S(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function S(e) {
  var r = M(e, "string");
  return c(r) == "symbol" ? r : r + "";
}
function M(e, r) {
  if (c(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var a = t.call(e, r || "default");
    if (c(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var F = {
  ripple: !1,
  inputStyle: null,
  inputVariant: null,
  locale: {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    upload: "Upload",
    cancel: "Cancel",
    completed: "Completed",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    today: "Today",
    weekHeader: "Wk",
    firstDayOfWeek: 0,
    showMonthAfterYear: !1,
    dateFormat: "mm/dd/yy",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyFilterMessage: "No results found",
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    fileChosenMessage: "{0} files",
    noFileChosenMessage: "No file chosen",
    emptyMessage: "No available options",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "Page {page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List"
    }
  },
  filterMatchModeOptions: {
    text: [s.STARTS_WITH, s.CONTAINS, s.NOT_CONTAINS, s.ENDS_WITH, s.EQUALS, s.NOT_EQUALS],
    numeric: [s.EQUALS, s.NOT_EQUALS, s.LESS_THAN, s.LESS_THAN_OR_EQUAL_TO, s.GREATER_THAN, s.GREATER_THAN_OR_EQUAL_TO],
    date: [s.DATE_IS, s.DATE_IS_NOT, s.DATE_BEFORE, s.DATE_AFTER]
  },
  zIndex: {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  },
  theme: void 0,
  unstyled: !1,
  pt: void 0,
  ptOptions: {
    mergeSections: !0,
    mergeProps: !1
  },
  csp: {
    nonce: void 0
  }
}, L = Symbol();
function _(e, r) {
  var t = {
    config: T(r)
  };
  return e.config.globalProperties.$primevue = t, e.provide(L, t), B(), O(e, t), t;
}
var d = [];
function B() {
  k.clear(), d.forEach(function(e) {
    return e == null ? void 0 : e();
  }), d = [];
}
function O(e, r) {
  var t = A(!1), a = function() {
    if (!y.isStyleNameLoaded("common")) {
      var i, l, v = ((i = u.getCommonTheme) === null || i === void 0 ? void 0 : i.call(u)) || {}, g = v.primitive, m = v.semantic, p = {
        nonce: (l = r.config) === null || l === void 0 || (l = l.csp) === null || l === void 0 ? void 0 : l.nonce
      };
      u.load(g == null ? void 0 : g.css, h({
        name: "primitive-variables"
      }, p)), u.load(m == null ? void 0 : m.css, h({
        name: "semantic-variables"
      }, p)), u.loadTheme(h({
        name: "global-style"
      }, p)), y.setLoadedStyleName("common");
    }
  };
  k.on("theme:change", function(o) {
    t.value || (e.config.globalProperties.$primevue.config.theme = o, t.value = !0);
  });
  var n = b(r.config, function(o, i) {
    f.emit("config:change", {
      newValue: o,
      oldValue: i
    });
  }, {
    immediate: !0,
    deep: !0
  }), w = b(function() {
    return r.config.ripple;
  }, function(o, i) {
    f.emit("config:ripple:change", {
      newValue: o,
      oldValue: i
    });
  }, {
    immediate: !0,
    deep: !0
  }), z = b(function() {
    return r.config.theme;
  }, function(o, i) {
    t.value || y.setTheme(o), r.config.unstyled || a(), t.value = !1, f.emit("config:theme:change", {
      newValue: o,
      oldValue: i
    });
  }, {
    immediate: !0,
    deep: !0
  }), C = b(function() {
    return r.config.unstyled;
  }, function(o, i) {
    !o && r.config.theme && a(), f.emit("config:unstyled:change", {
      newValue: o,
      oldValue: i
    });
  }, {
    immediate: !0,
    deep: !0
  });
  d.push(n), d.push(w), d.push(z), d.push(C);
}
var N = {
  install: function(r, t) {
    var a = j(F, t);
    _(r, a);
  }
};
const P = {
  accordiontab: {
    header: ({ props: e }) => ({
      class: [
        // Sizing
        "pt-6 pb-0",
        "mt-6",
        // Shape
        "border-x-0 border-b-0",
        // Color
        "border border-surface-200 dark:border-surface-700",
        // State
        {
          "select-none pointer-events-none cursor-default opacity-60": e == null ? void 0 : e.disabled
        }
      ]
    }),
    headerAction: ({ context: e }) => ({
      class: [
        //Font
        "font-semibold",
        "leading-7",
        // Alignments
        "flex items-center justify-between flex-row-reverse",
        "relative",
        // Shape
        "rounded-md",
        // Color
        "bg-transparent",
        "text-surface-900 dark:text-surface-0",
        // States
        "focus:outline-none focus:outline-offset-0 focus-visible:ring-2 focus-visible:ring-primary-600 ring-inset dark:focus-visible:ring-primary-500",
        // Focus
        // Misc
        "cursor-pointer no-underline select-none"
      ]
    }),
    headerIcon: {
      class: "inline-block ml-2"
    },
    headerTitle: {
      class: "leading-7"
    },
    content: {
      class: [
        // Font
        "leading-7",
        // Spacing
        "pr-12 pt-2",
        // Color
        "text-surface-600 dark:text-surface-0/70"
      ]
    },
    transition: {
      enterFromClass: "max-h-0",
      enterActiveClass: "overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",
      enterToClass: "max-h-[1000px]",
      leaveFromClass: "max-h-[1000px]",
      leaveActiveClass: "overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]",
      leaveToClass: "max-h-0"
    }
  }
}, D = {
  root: ({ props: e }) => ({
    class: [
      "relative",
      // Flex
      "inline-flex",
      // Size
      {
        "w-full": e.multiple
      },
      // Color
      "text-surface-900 dark:text-surface-0",
      //States
      {
        "opacity-60 select-none pointer-events-none cursor-default": e.disabled
      }
    ]
  }),
  container: ({ props: e, state: r }) => ({
    class: [
      // Font
      "font-sans sm:text-sm leading-none",
      // Flex
      "flex items-center flex-wrap",
      "gap-1",
      // Spacing
      "m-0 list-none",
      "px-3 py-1",
      {
        "px-3 py-1.5": !e.multiple,
        "px-3 py-1": e.multiple
      },
      // Size
      "w-full",
      // Shape
      "appearance-none rounded-md",
      // Color
      "text-surface-900 dark:text-surface-0",
      "bg-surface-0 dark:bg-surface-900",
      "placeholder:text-surface-400 dark:placeholder:text-surface-500",
      "shadow-sm",
      // States
      "focus:outline-none focus:outline-offset-0",
      {
        "ring-1 ring-inset ring-surface-300 dark:ring-surface-700 ring-offset-0": !r.focused,
        "ring-2 ring-primary-500 dark:ring-primary-400": r.focused
      },
      // Transition
      "transition duration-200 ease-in-out",
      // Misc
      "cursor-text overflow-hidden"
    ]
  }),
  inputtoken: ({ props: e }) => ({
    class: [{
      "py-1.5 px-0": !e.multiple,
      "p-0.5": e.multiple
    }, , "inline-flex flex-auto"]
  }),
  input: ({ props: e }) => ({
    class: [
      // Font
      "font-sans sm:text-sm leading-none",
      // Shape
      "appearance-none rounded-md",
      {
        "rounded-tr-none rounded-br-none": e.dropdown
      },
      {
        "outline-none shadow-none rounded-none": e.multiple
      },
      // Size
      {
        "w-full": e.multiple
      },
      // Spacing
      "m-0",
      {
        "py-1.5 px-3": !e.multiple,
        "p-0": e.multiple
      },
      // Colors
      "text-surface-700 dark:text-white/80",
      {
        "bg-surface-0 dark:bg-surface-900": !e.multiple,
        "border border-surface-300 dark:border-surface-700": !e.multiple,
        "border-0 bg-transparent": e.multiple
      },
      // States
      {
        "focus:outline-none focus:outline-offset-0 focus:ring-inset focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400": !e.multiple
      },
      // Transition
      "transition-colors duration-200"
    ]
  }),
  token: {
    class: [
      // Flexbox
      "inline-flex items-center",
      // Spacing
      "py-0.5 px-3",
      // Shape
      "rounded-[1.14rem]",
      // Colors
      "text-surface-700 dark:text-white/70",
      "bg-surface-200 dark:bg-surface-700"
    ]
  },
  label: {
    class: "leading-5"
  },
  removeTokenIcon: {
    class: [
      // Shape
      "rounded-md leading-6",
      // Spacing
      "ml-2",
      // Size
      "w-4 h-4",
      // Transition
      "transition duration-200 ease-in-out",
      // Misc
      "cursor-pointer"
    ]
  },
  dropdownbutton: {
    root: {
      class: [
        "relative text-sm leading-none",
        // Alignments
        "items-center inline-flex text-center align-bottom",
        // Shape
        "rounded-r-md",
        // Size
        "px-2.5 py-1.5",
        "-ml-[1px]",
        // Colors
        "text-surface-600 dark:text-surface-100",
        "bg-surface-100 dark:bg-surface-800",
        "ring-1 ring-inset ring-surface-300 dark:ring-surface-700",
        // States
        "hover:bg-surface-200 dark:hover:bg-surface-700",
        "focus:outline-none focus:outline-offset-0 focus:ring-1",
        "focus:ring-primary-500 dark:focus:ring-primary-400"
      ]
    }
  },
  loadingicon: {
    class: ["text-sm leading-none text-surface-500 dark:text-surface-0/70", "absolute top-[50%] right-[0.5rem] -mt-2 animate-spin"]
  },
  panel: {
    class: [
      // Position
      "absolute top-0 left-0",
      "mt-2",
      // Shape
      "border-0",
      "rounded-md",
      "shadow-md",
      "max-h-[15rem]",
      "overflow-auto",
      // Color
      "bg-surface-0 dark:bg-surface-800",
      "text-surface-800 dark:text-white/80",
      "ring-1 ring-inset ring-surface-300 dark:ring-surface-700"
    ]
  },
  list: {
    class: "py-1 list-none m-0"
  },
  item: ({ context: e }) => ({
    class: [
      // Font
      "sm:text-sm",
      "leading-none",
      {
        "font-normal": !e.selected,
        "font-bold": e.selected
      },
      // Position
      "relative",
      // Shape
      "border-0",
      "rounded-none",
      // Spacing
      "m-0",
      "py-2 px-4",
      // Color
      {
        "text-surface-700 dark:text-white/80": !e.focused && !e.selected
      },
      {
        "bg-surface-200 dark:bg-surface-600/60 text-surface-700 dark:text-white/80": e.focused && !e.selected
      },
      {
        "bg-primary-500 dark:bg-primary-400 text-white dark:text-surface-700": e.focused && e.selected
      },
      {
        "bg-transparent text-surface-700 dark:text-white/80": !e.focused && e.selected
      },
      //States
      "hover:bg-primary-500 dark:hover:bg-primary-400 hover:text-white dark:hover:text-surface-700",
      // Misc
      "cursor-pointer",
      "overflow-hidden",
      "whitespace-nowrap"
    ]
  }),
  itemgroup: {
    class: [
      //Font
      "font-bold",
      "sm:text-sm",
      // Spacing
      "m-0",
      "py-2 px-4",
      // Color
      "text-surface-800 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-600/80",
      // Misc
      "cursor-auto"
    ]
  },
  emptymessage: {
    class: [
      // Font
      "leading-none",
      "sm:text-sm",
      // Spacing
      "py-2 px-4",
      // Color
      "text-surface-800 dark:text-white/80",
      "bg-transparent"
    ]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, E = {
  root: ({ props: e, parent: r }) => {
    var t, a, n;
    return {
      class: [
        // Font
        {
          "text-sm": e.size == null || e.size == "normal",
          "text-lg": e.size == "large",
          "text-xl": e.size == "xlarge"
        },
        // Alignments
        "inline-flex items-center justify-center",
        "shrink-0",
        "relative",
        // Sizes
        {
          "h-8 w-8": e.size == null || e.size == "normal",
          "w-12 h-12": e.size == "large",
          "w-16 h-16": e.size == "xlarge"
        },
        {
          "-ml-4": ((t = r.instance.$style) == null ? void 0 : t.name) == "avatargroup"
        },
        // Shapes
        {
          "rounded-lg": e.shape == "square",
          "rounded-full": e.shape == "circle"
        },
        {
          "border-2": ((a = r.instance.$style) == null ? void 0 : a.name) == "avatargroup"
        },
        // Colors
        "bg-surface-100 dark:bg-surface-700",
        {
          "border-white dark:border-surface-800": ((n = r.instance.$style) == null ? void 0 : n.name) == "avatargroup"
        }
      ]
    };
  },
  image: {
    class: "h-full w-full"
  }
}, R = {
  root: {
    class: "flex items-center"
  }
}, V = {
  root: ({ props: e, context: r }) => ({
    class: [
      // Font
      "font-medium",
      {
        "text-xs leading-[1.5rem]": e.size == null,
        "text-lg leading-[2.25rem]": e.size == "large",
        "text-2xl leading-[3rem]": e.size == "xlarge"
      },
      // Alignment
      "text-center inline-block",
      // Size
      "p-0 px-1",
      {
        "min-w-[1.5rem] h-[1.5rem]": e.size == null,
        "min-w-[2.25rem] h-[2.25rem]": e.size == "large",
        "min-w-[3rem] h-[3rem]": e.size == "xlarge"
      },
      // Shape
      {
        "rounded-full": e.value.length == 1,
        "rounded-[0.71rem]": e.value.length !== 1
      },
      // Color
      "text-white dark:text-surface-900",
      {
        "bg-primary-500 dark:bg-primary-400": e.severity == null || e.severity == "primary",
        "bg-surface-500 dark:bg-surface-400": e.severity == "secondary",
        "bg-green-500 dark:bg-green-400": e.severity == "success",
        "bg-blue-500 dark:bg-blue-400": e.severity == "info",
        "bg-orange-500 dark:bg-orange-400": e.severity == "warning",
        "bg-purple-500 dark:bg-purple-400": e.severity == "help",
        "bg-red-500 dark:bg-red-400": e.severity == "danger"
      }
    ]
  })
}, G = {
  root: ({ context: e }) => ({
    class: [
      // Font
      "font-medium",
      "text-xs leading-6 font-sans",
      // Alignment
      "flex items-center justify-center",
      "text-center",
      // Position
      "absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 origin-top-right",
      // Size
      "m-0",
      {
        "p-0": e.nogutter || e.dot,
        "p-1": !e.nogutter && !e.dot,
        "min-w-[0.5rem] h-2": e.dot,
        "min-w-[1rem] h-4": !e.dot
      },
      // Shape
      {
        "rounded-full": e.nogutter || e.dot,
        "rounded-[10px]": !e.nogutter && !e.dot
      },
      // Color
      "text-white dark:text-surface-900",
      "ring-1 ring-white dark:ring-surface-900",
      {
        "bg-primary-500 dark:bg-primary-400": !e.info && !e.success && !e.warning && !e.danger && !e.help && !e.secondary,
        "bg-surface-500 dark:bg-surface-400": e.secondary,
        "bg-green-500 dark:bg-green-400": e.success,
        "bg-blue-500 dark:bg-blue-400": e.info,
        "bg-orange-500 dark:bg-orange-400": e.warning,
        "bg-purple-500 dark:bg-purple-400": e.help,
        "bg-red-500 dark:bg-red-400": e.danger
      }
    ]
  })
}, H = {
  menu: {
    class: [
      // Flex & Alignment
      "flex items-center flex-nowrap gap-x-1.5",
      // Spacing
      "m-0 p-0 list-none leading-none"
    ]
  },
  action: {
    class: [
      // Font
      "font-semibold text-decoration-none text-sm",
      // Flex & Alignment
      "flex items-center gap-x-1.5 ",
      // Shape
      "rounded-md",
      // Color
      "text-surface-500 dark:text-white/70",
      // States
      "focus-visible:outline-none focus-visible:outline-offset-0",
      "focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      // Transitions
      "transition-shadow duration-200"
    ]
  },
  icon: {
    class: "text-surface-500 dark:text-white/70"
  },
  separator: {
    class: [
      // Flex & Alignment
      "flex items-center shrink-0",
      // Color
      "text-surface-500 dark:text-white/70"
    ]
  }
}, W = {
  root: ({ props: e, context: r, parent: t }) => ({
    class: e.unstyled ? [] : [
      "relative",
      // Alignments
      "items-center justify-center inline-flex text-center align-bottom",
      // Sizes & Spacing
      "text-sm",
      {
        "px-2.5 py-1.5 min-w-[2rem]": e.size === null && e.label !== null,
        "px-2 py-0.5 h-6": e.size === "small",
        "px-3 py-1.5 h-8": e.size === "large" && !!e.label,
        "px-2 py-1.5 h-8": e.size === "large" && !e.label
      },
      // Shapes
      {
        "!rounded-md": !e.rounded,
        "!rounded-full": e.rounded
      },
      {
        "rounded-none first:rounded-l-md last:rounded-r-md self-center": t.instance.$name == "InputGroup"
      },
      // Link Button
      {
        "text-sky-300 bg-transparent ring-transparent": e.link
      },
      // Plain Button
      {
        "text-gray-800 bg-inherit": e.plain && !e.outlined && !e.text
      },
      // Plain Text Button
      {
        "text-gray-500": e.plain && e.text
      },
      // Plain Outlined Button
      {
        "text-gray-500": e.plain && e.outlined
      },
      // Text Button
      {
        "bg-transparent ring-transparent": e.text && !e.plain
      },
      // Outlined Button
      {
        "bg-inherit": e.outlined && !e.plain
      },
      // --- Severity Buttons ---
      // gray Button
      {
        "text-gray-800 dark:text-gray-900": !e.link && e.severity === null && !e.text && !e.outlined && !e.plain,
        "!bg-sky-300 dark:bg-sky-300": !e.link && e.severity === null && !e.text && !e.outlined && !e.plain
      },
      // gray Text Button
      {
        "text-gray-500 dark:text-gray-400": e.text && e.severity === null && !e.plain
      },
      // gray Outlined Button
      {
        "text-gray-500": e.outlined && e.severity === null && !e.plain
      },
      // Secondary Button
      {
        "text-gray-800 dark:text-gray-900": e.severity === "secondary" && !e.text && !e.outlined && !e.plain,
        "bg-gray-500 dark:bg-gray-400": e.severity === "secondary" && !e.text && !e.outlined && !e.plain
      },
      // Secondary Text Button
      {
        "text-gray-500 dark:text-gray-400": e.text && e.severity === "secondary" && !e.plain
      },
      // Secondary Outlined Button
      {
        "text-gray-500 hover:bg-gray-300/20": e.outlined && e.severity === "secondary" && !e.plain
      },
      // Success Button
      {
        "text-green-900 dark:text-green-900": e.severity === "success" && !e.text && !e.outlined && !e.plain,
        "bg-green-500 dark:bg-green-400": e.severity === "success" && !e.text && !e.outlined && !e.plain
      },
      // Success Text Button
      {
        "text-green-500 dark:text-green-400": e.text && e.severity === "success" && !e.plain
      },
      // Success Outlined Button
      {
        "text-green-500 hover:bg-green-300/20": e.outlined && e.severity === "success" && !e.plain
      },
      // Info Button
      {
        "text-gray-800 dark:text-gray-900": e.severity === "info" && !e.text && !e.outlined && !e.plain,
        "bg-blue-500 dark:bg-blue-400": e.severity === "info" && !e.text && !e.outlined && !e.plain
      },
      // Info Text Button
      {
        "text-blue-500 dark:text-blue-400": e.text && e.severity === "info" && !e.plain
      },
      // Info Outlined Button
      {
        "text-blue-500 hover:bg-blue-300/20 ": e.outlined && e.severity === "info" && !e.plain
      },
      // Warning Button
      {
        "text-gray-800 dark:text-gray-900": e.severity === "warning" && !e.text && !e.outlined && !e.plain,
        "bg-orange-500 dark:bg-orange-400": e.severity === "warning" && !e.text && !e.outlined && !e.plain
      },
      // Warning Text Button
      {
        "text-orange-500 dark:text-orange-400": e.text && e.severity === "warning" && !e.plain
      },
      // Warning Outlined Button
      {
        "text-orange-500 hover:bg-orange-300/20": e.outlined && e.severity === "warning" && !e.plain
      },
      // Help Button
      {
        "text-gray-800 dark:text-gray-900": e.severity === "help" && !e.text && !e.outlined && !e.plain,
        "bg-purple-500 dark:bg-purple-400": e.severity === "help" && !e.text && !e.outlined && !e.plain
      },
      // Help Text Button
      {
        "text-purple-500 dark:text-purple-400": e.text && e.severity === "help" && !e.plain
      },
      // Help Outlined Button
      {
        "text-purple-500 hover:bg-purple-300/20": e.outlined && e.severity === "help" && !e.plain
      },
      // Danger Button
      {
        "text-gray-800 dark:text-gray-900": e.severity === "danger" && !e.text && !e.outlined && !e.plain,
        "bg-red-500 dark:bg-red-400": e.severity === "danger" && !e.text && !e.outlined && !e.plain
      },
      // Danger Text Button
      {
        "text-red-500 dark:text-red-400": e.text && e.severity === "danger" && !e.plain
      },
      // Danger Outlined Button
      {
        "text-red-500 hover:bg-red-300/20": e.outlined && e.severity === "danger" && !e.plain
      },
      // --- Severity Button States ---
      {
        "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-offset-sky-500 focus:ring-sky-200": !e.plain,
        "focus:ring-offset-2 focus:ring-sky-400": !e.link && !e.plain && !e.outlined && !e.text
      },
      // Link
      {
        "focus:ring-sky-500 dark:focus:ring-sky-400": e.link
      },
      // Plain
      {
        "!hover:bg-sky-200 hover:ring-none": e.plain && !e.outlined && !e.text
      },
      // Text & Outlined Button
      {
        "hover:bg-gray-300/20": e.plain && (e.text || e.outlined)
      },
      // gray
      {
        "hover:!bg-sky-200 dark:hover:bg-sky-200 hover:ring-sky-300 dark:hover:ring-sky-300": !e.link && e.severity === null && !e.text && !e.outlined && !e.plain
      },
      {
        "focus:ring-sky-300 dark:focus:ring-sky-300": e.severity === null && !e.plain
      },
      // Text & Outlined Button
      {
        "hover:bg-sky-200/20": (e.text || e.outlined) && e.severity === null && !e.plain
      },
      // Secondary
      {
        "hover:bg-sky-200 dark:hover:bg-sky-200 hover:ring-sky-300 dark:hover:ring-sky-300": e.severity === "secondary" && !e.text && !e.outlined && !e.plain
      },
      {
        "focus:ring-sky-300 dark:focus:ring-sky-300": e.severity === "secondary"
      },
      // Text & Outlined Button
      {
        "hover:bg-sky-200/20": (e.text || e.outlined) && e.severity === "secondary" && !e.plain
      },
      // Success
      {
        "hover:bg-green-600 dark:hover:bg-green-300 hover:ring-green-600 dark:hover:ring-green-300": e.severity === "success" && !e.text && !e.outlined && !e.plain
      },
      {
        "focus:ring-green-500 dark:focus:ring-green-400": e.severity === "success"
      },
      // Text & Outlined Button
      {
        "hover:bg-green-300/20": (e.text || e.outlined) && e.severity === "success" && !e.plain
      },
      // Info
      {
        "hover:bg-blue-600 dark:hover:bg-blue-300 hover:ring-blue-600 dark:hover:ring-blue-300": e.severity === "info" && !e.text && !e.outlined && !e.plain
      },
      {
        "focus:ring-blue-500 dark:focus:ring-blue-400": e.severity === "info"
      },
      // Text & Outlined Button
      {
        "hover:bg-blue-300/20": (e.text || e.outlined) && e.severity === "info" && !e.plain
      },
      // Warning
      {
        "hover:bg-orange-600 dark:hover:bg-orange-300 hover:ring-orange-600 dark:hover:ring-orange-300": e.severity === "warning" && !e.text && !e.outlined && !e.plain
      },
      {
        "focus:ring-orange-500 dark:focus:ring-orange-400": e.severity === "warning"
      },
      // Text & Outlined Button
      {
        "hover:bg-orange-300/20": (e.text || e.outlined) && e.severity === "warning" && !e.plain
      },
      // Help
      {
        "hover:bg-purple-600 dark:hover:bg-purple-300 hover:ring-purple-600 dark:hover:ring-purple-300": e.severity === "help" && !e.text && !e.outlined && !e.plain
      },
      {
        "focus:ring-purple-500 dark:focus:ring-purple-400": e.severity === "help"
      },
      // Text & Outlined Button
      {
        "hover:bg-purple-300/20": (e.text || e.outlined) && e.severity === "help" && !e.plain
      },
      // Danger
      {
        "hover:bg-red-600 dark:hover:bg-red-300 hover:ring-red-600 dark:hover:ring-red-300": e.severity === "danger" && !e.text && !e.outlined && !e.plain
      },
      {
        "focus:ring-red-500 dark:focus:ring-red-400": e.severity === "danger"
      },
      // Text & Outlined Button
      {
        "hover:bg-red-300/20": (e.text || e.outlined) && e.severity === "danger" && !e.plain
      },
      // Disabled
      {
        "opacity-60 pointer-events-none cursor-default": r.disabled
      },
      // Transitions
      "transition duration-200 ease-in-out",
      // Misc
      "cursor-pointer overflow-hidden select-none"
    ]
  }),
  label: ({ props: e }) => ({
    class: ["duration-200", "font-medium", {
      "hover:underline": e.link
    }, {
      "flex-1": e.label !== null,
      hidden: e.label == null
    }]
  }),
  icon: ({ props: e }) => ({
    class: [
      "mx-0",
      {
        "mr-2": e.iconPos == "left" && e.label != null,
        "ml-2 order-1": e.iconPos == "right" && e.label != null,
        "mb-2": e.iconPos == "top" && e.label != null,
        "mt-2": e.iconPos == "bottom" && e.label != null
      }
    ]
  }),
  loadingicon: ({ props: e }) => ({
    class: ["h-3 w-3", "mx-0", {
      "mr-2": e.iconPos == "left" && e.label != null,
      "ml-2 order-1": e.iconPos == "right" && e.label != null,
      "mb-2": e.iconPos == "top" && e.label != null,
      "mt-2": e.iconPos == "bottom" && e.label != null
    }, "animate-spin"]
  }),
  badge: ({ props: e }) => ({
    class: [{
      "ml-2 w-4 h-4 leading-none flex items-center justify-center": e.badge
    }]
  })
}, U = {
  root: ({ props: e }) => ({
    class: [
      // Display and Position
      "inline-flex",
      "relative",
      "shadow-sm",
      "rounded-md",
      // Misc
      {
        "opacity-40 select-none pointer-events-none cursor-default": e.disabled
      }
    ]
  }),
  input: ({ props: e }) => ({
    class: [
      // Font
      "font-sans leading-none sm:text-sm",
      // Colors
      "text-surface-900 dark:text-surface-0",
      "placeholder:text-surface-400 dark:placeholder:text-surface-500",
      "bg-surface-0 dark:bg-surface-900",
      "ring-1 ring-inset ring-gray-b dark:ring-surface-700 ring-offset-0",
      // Spacing
      "m-0 py-1.5 px-3",
      "-ml-[1px]",
      // Shape
      "appearance-none w-full",
      {
        "rounded-md": !e.showIcon || e.iconDisplay == "input"
      },
      {
        "rounded-l-md  flex-1 pr-9 ": e.showIcon && e.iconDisplay !== "input"
      },
      {
        "rounded-md flex-1 pr-9": e.showIcon && e.iconDisplay === "input"
      },
      // Transitions
      "transition-colors",
      "duration-200",
      // Interactions
      {
        "outline-none focus:ring-sky-600 dark:focus:ring-primary-400": !e.disabled,
        "opacity-60 select-none pointer-events-none cursor-default": e.disabled
      }
    ]
  }),
  inputicon: {
    class: ["sm:text-sm", "absolute top-[50%] -mt-2", "text-surface-600 dark:text-surface-200", "right-[.75rem]"]
  },
  dropdownbutton: {
    root: {
      class: [
        "relative text-sm",
        // Alignments
        "items-center inline-flex text-center align-bottom",
        // Shape
        "rounded-r-md",
        // Size
        "px-2.5 py-1.5 leading-none",
        // Colors
        "text-surface-600 dark:text-surface-100",
        "bg-surface-100 dark:bg-surface-800",
        "ring-1 ring-inset ring-surface-300 dark:ring-surface-700",
        // States
        "hover:bg-surface-200 dark:hover:bg-surface-700",
        "focus:outline-none focus:outline-offset-0 focus:ring-1",
        "focus:ring-primary-500 dark:focus:ring-primary-400"
      ]
    }
  },
  panel: ({ props: e }) => ({
    class: [
      // Display & Position
      {
        absolute: !e.inline,
        "inline-block": e.inline
      },
      // Size
      {
        "w-auto ": !e.inline
      },
      {
        "min-w-[80vw] w-auto ": e.touchUI
      },
      {
        "min-w-full": e.inline
      },
      // Shape
      "rounded-lg",
      {
        "shadow-md ring-1": !e.inline
      },
      // Colors
      "bg-white dark:bg-surface-800",
      "ring-gray-b dark:ring-surface-700",
      //misc
      {
        "overflow-x-auto": e.inline
      }
    ]
  }),
  datepickerMask: {
    class: ["fixed top-0 left-0 w-full h-full", "flex items-center justify-center", "bg-black bg-opacity-90"]
  },
  header: ({ props: e }) => ({
    class: [
      //Font
      "font-semibold text-md",
      // Flexbox and Alignment
      "flex items-center justify-between",
      // Spacing
      "m-0",
      {
        "py-2 pl-2": !(e.numberOfMonths > 1),
        "py-2": e.numberOfMonths > 1
      },
      // Shape
      "rounded-t-md",
      // Colors
      "text-surface-700 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-800"
    ]
  }),
  previousbutton: ({ props: e }) => ({
    class: [
      "relative",
      // Flexbox and Alignment
      "inline-flex items-center justify-center",
      {
        " order-2": !(e.numberOfMonths > 1),
        "order-1": e.numberOfMonths > 1
      },
      // Size
      "p-1.5 m-0",
      // Colors
      "text-surface-500 dark:text-white/60",
      "border-0",
      "bg-transparent",
      // States
      "hover:text-select-600 dark:hover:text-white/80",
      // Misc
      "cursor-pointer overflow-hidden"
    ]
  }),
  title: ({ props: e }) => ({
    class: [
      // Text
      "leading-6",
      "my-0",
      "order-1",
      {
        "mr-auto": !(e.numberOfMonths > 1),
        " mx-auto": e.numberOfMonths > 1
      }
    ]
  }),
  monthTitle: {
    class: [
      // Font
      "text-base leading-6",
      "font-semibold",
      // Colors
      "text-surface-700 dark:text-white/80",
      // Transitions
      "transition duration-200",
      // Spacing
      "m-0 mr-2",
      // States
      "hover:text-select-600 dark:hover:text-primary-400",
      // Misc
      "cursor-pointer"
    ]
  },
  yearTitle: {
    class: [
      // Font
      "text-base leading-6",
      "font-semibold",
      // Colors
      "text-surface-700 dark:text-white/80",
      // Transitions
      "transition duration-200",
      // Spacing
      "m-0",
      // States
      "hover:text-select-600 dark:hover:text-primary-400",
      // Misc
      "cursor-pointer"
    ]
  },
  nextbutton: ({ props: e }) => ({
    class: [
      "relative",
      // Flexbox and Alignment
      "inline-flex items-center justify-center order-3",
      {
        " order-3": !(e.numberOfMonths > 1),
        "order-1": e.numberOfMonths > 1
      },
      // Size
      "p-1.5 m-0",
      // Colors
      "text-surface-500 dark:text-white/60",
      "border-0",
      "bg-transparent",
      // States
      "hover:text-select-600 dark:hover:text-white/80",
      // Misc
      "cursor-pointer overflow-hidden"
    ]
  }),
  table: {
    class: [
      // Size & Shape
      "w-full",
      // Spacing
      "m-0"
    ]
  },
  tableheadercell: {
    class: [
      // Spacing
      "p-0 md:p-1",
      "text-sm"
    ]
  },
  tablebodyrow: {
    class: ["border-b border-surface-200 dark:border-surface-700 last:border-b-0"]
  },
  weekheader: {
    class: ["leading-6 text-sm font-semibold", "text-surface-600 dark:text-white/70", "opacity-40 cursor-default", "mb-2"]
  },
  weeknumber: {
    class: ["text-surface-600 dark:text-white/70 font-normal", "opacity-40 cursor-default"]
  },
  weekday: {
    class: [
      // Colors
      "text-surface-500 dark:text-white/60 font-semibold"
    ]
  },
  day: {
    class: [
      // Spacing
      "p-0 md:p-1",
      "text-sm"
    ]
  },
  weeklabelcontainer: ({ context: e }) => ({
    class: [
      // Flexbox and Alignment
      "flex items-center justify-center",
      "mx-auto",
      // Shape & Size
      "w-10 h-10",
      "rounded-full",
      "border-transparent border",
      // Colors
      {
        "text-surface-600 dark:text-white/70 bg-transparent": !e.selected && !e.disabled,
        "text-primary-500  dark:text-primary-400": e.selected && !e.disabled
      },
      // States
      "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50",
      {
        "hover:bg-select-200 dark:hover:bg-surface-800/80": !e.disabled
      },
      {
        "opacity-40 cursor-default": e.disabled,
        "cursor-pointer": !e.disabled
      }
    ]
  }),
  daylabel: ({ context: e }) => ({
    class: [
      // Flexbox and Alignment
      "flex items-center justify-center",
      "mx-auto",
      // Shape & Size
      "w-8 h-8",
      "rounded-full",
      // Colors
      {
        "text-surface-0 bg-surface-900 dark:text-surface-900 dark:bg-surface-0": e.date.today && !e.selected && !e.disabled,
        "text-surface-600 dark:text-white/70 bg-transparent": !e.selected && !e.disabled && !e.date.today,
        "text-primary-500 dark:text-primary-400": e.selected && !e.disabled && !e.date.today,
        "text-primary-200 dark:text-primary-600 bg-surface-900 dark:bg-surface-0": e.selected && !e.disabled && e.date.today
      },
      // States
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      {
        "hover:bg-select-200 dark:hover:bg-surface-600/80": !e.disabled,
        "hover:bg-select-200 dark:hover:bg-surface-200": !e.disabled && e.date.today
      },
      {
        "opacity-40 cursor-default": e.disabled,
        "cursor-pointer": !e.disabled
      }
    ]
  }),
  monthpicker: {
    class: [
      // Spacing
      "my-2"
    ]
  },
  month: ({ context: e }) => ({
    class: [
      // Flexbox and Alignment
      "inline-flex items-center justify-center",
      // Size
      "w-1/3",
      "px-2.5 py-1.5",
      "mt-1",
      "text-md leading-none",
      // Shape
      "rounded-md",
      // Colors
      {
        "text-surface-600 dark:text-white/70 bg-transparent": !e.selected && !e.disabled,
        "text-primary-500 dark:text-primary-400": e.selected && !e.disabled
      },
      // States
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      "hover:bg-select-200 dark:hover:bg-surface-600/80",
      // Misc
      "cursor-pointer"
    ]
  }),
  yearpicker: {
    class: [
      // Spacing
      "my-2"
    ]
  },
  year: ({ context: e }) => ({
    class: [
      // Flexbox and Alignment
      "inline-flex items-center justify-center",
      // Size
      "w-1/3",
      "px-2.5 py-1.5",
      "mt-1",
      "text-md leading-none",
      // Shape
      "rounded-md",
      // Colors
      {
        "text-surface-600 dark:text-white/70 bg-transparent": !e.selected && !e.disabled,
        "text-primary-500 dark:text-primary-400": e.selected && !e.disabled
      },
      // States
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      "hover:bg-select-200 dark:hover:bg-surface-600/80",
      // Misc
      "cursor-pointer"
    ]
  }),
  timepicker: {
    class: [
      // Flexbox
      "flex",
      "justify-center items-center",
      // Spacing
      "p-1.5"
    ]
  },
  separatorcontainer: {
    class: [
      // Flexbox and Alignment
      "flex",
      "items-center",
      "flex-col",
      // Spacing
      "px-2"
    ]
  },
  separator: {
    class: [
      // Text
      "text-xl"
    ]
  },
  hourpicker: {
    class: [
      // Flexbox and Alignment
      "flex",
      "items-center",
      "flex-col",
      // Spacing
      "px-2"
    ]
  },
  minutepicker: {
    class: [
      // Flexbox and Alignment
      "flex",
      "items-center",
      "flex-col",
      // Spacing
      "px-2"
    ]
  },
  ampmpicker: {
    class: [
      // Flexbox and Alignment
      "flex",
      "items-center",
      "flex-col",
      // Spacing
      "px-2"
    ]
  },
  incrementbutton: {
    class: [
      "relative",
      // Flexbox and Alignment
      "inline-flex items-center justify-center",
      // Size
      "p-1.5 m-0",
      // Colors
      "text-surface-500 dark:text-white/60",
      "border-0",
      "bg-transparent",
      // States
      "hover:text-surface-700 dark:hover:text-white/80",
      // Misc
      "cursor-pointer overflow-hidden"
    ]
  },
  decrementbutton: {
    class: [
      "relative",
      // Flexbox and Alignment
      "inline-flex items-center justify-center",
      // Size
      "p-1.5 m-0",
      // Colors
      "text-surface-500 dark:text-white/60",
      "border-0",
      "bg-transparent",
      // States
      "hover:text-surface-700 dark:hover:text-white/80",
      // Misc
      "cursor-pointer overflow-hidden"
    ]
  },
  groupcontainer: {
    class: [
      // Flexbox
      "flex"
    ]
  },
  group: {
    class: [
      // Flexbox and Sizing
      "flex-1",
      // Borders
      "border-l",
      "border-surface-200 dark:border-surface-700",
      // Spacing
      "pr-0.5",
      "pl-0.5",
      "pt-0",
      "pb-0",
      // Pseudo-Classes
      "first:pl-0",
      "first:border-l-0"
    ]
  },
  buttonbar: {
    class: [
      // Flexbox
      "flex justify-between items-center",
      // Spacing
      "pt-2.5 pb-1.5 px-0",
      // Shape
      "border-t border-surface-200 dark:border-surface-700"
    ]
  },
  todaybutton: {
    root: {
      class: [
        // Flexbox and Alignment
        "inline-flex items-center justify-center",
        // Spacing
        "px-2.5 py-1.5 text-sm leading-none",
        // Shape
        "rounded-md",
        // Colors
        "bg-transparent border-transparent",
        "text-primary-500 dark:text-primary-400",
        // Transitions
        "transition-colors duration-200 ease-in-out",
        // States
        "focus:outline-none focus:outline-offset-0 focus:ring-2 ring-inset",
        "focus:ring-primary-500 dark:focus:ring-primary-400",
        "hover:bg-primary-300/20",
        // Misc
        "cursor-pointer"
      ]
    }
  },
  clearbutton: {
    root: {
      class: [
        // Flexbox and Alignment
        "inline-flex items-center justify-center",
        // Spacing
        "px-2.5 py-1.5 text-sm leading-none",
        // Shape
        "rounded-md",
        // Colors
        "bg-transparent border-transparent",
        "text-primary-500 dark:text-primary-400",
        // Transitions
        "transition-colors duration-200 ease-in-out",
        // States
        "focus:outline-none focus:outline-offset-0 focus:ring-2 ring-inset",
        "focus:ring-primary-500 dark:focus:ring-primary-400",
        "hover:bg-primary-300/20",
        // Misc
        "cursor-pointer"
      ]
    }
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, Y = {
  root: {
    class: [
      //Shape
      "rounded-lg",
      "shadow-md",
      //Color
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-surface-0/80"
    ]
  },
  header: {
    class: ["border-b border-surface-200 dark:border-surface-700"]
  },
  body: {
    class: "py-5"
  },
  title: {
    class: "text-lg font-medium mb-2 px-5 md:px-6"
  },
  subtitle: {
    class: [
      //Spacing
      "mb-1 px-5 md:px-6",
      //Color
      "text-surface-600 dark:text-surface-0/60"
    ]
  },
  content: {
    class: "py-6 px-5 md:px-6"
  },
  footer: {
    class: ["px-5 md:px-6 pt-5 pb-0", "border-t border-surface-200 dark:border-surface-700"]
  }
}, $ = {
  root: {
    class: [
      // Flexbox
      "flex flex-col"
    ]
  },
  content: {
    class: [
      // Flexbox & Overflow
      "flex flex-col overflow-auto"
    ]
  },
  container: ({ props: e }) => ({
    class: [
      // Flexbox
      "flex",
      // Orientation
      {
        "flex-row": e.orientation !== "vertical",
        "flex-col": e.orientation == "vertical"
      }
    ]
  }),
  previousbutton: {
    class: [
      // Flexbox & Alignment
      "flex justify-center items-center self-center",
      // Sizing & Overflow
      "overflow-hidden w-8 h-8",
      // Spacing
      "mx-2",
      // Shape
      "rounded-full",
      // Border & Background
      "border-0 bg-transparent",
      // Color
      "text-surface-600",
      // Transitions
      "transition duration-200 ease-in-out"
    ]
  },
  nextbutton: {
    class: [
      // Flexbox & Alignment
      "flex justify-center items-center self-center",
      // Sizing & Overflow
      "overflow-hidden w-8 h-8",
      // Spacing
      "mx-2",
      // Shape
      "rounded-full",
      // Border & Background
      "border-0 bg-transparent",
      // Color
      "text-surface-600",
      // Transitions
      "transition duration-200 ease-in-out"
    ]
  },
  itemscontent: {
    class: [
      // Overflow & Width
      "overflow-hidden w-full"
    ]
  },
  itemscontainer: ({ props: e }) => ({
    class: [
      // Flexbox
      "flex",
      // Orientation & Sizing
      {
        "flex-row": e.orientation !== "vertical",
        "flex-col h-full": e.orientation == "vertical"
      }
    ]
  }),
  item: ({ props: e }) => ({
    class: [
      // Flexbox
      "flex shrink-0 grow",
      // Width
      {
        "w-1/3": e.orientation !== "vertical",
        "w-full": e.orientation == "vertical"
      }
    ]
  }),
  indicators: {
    class: [
      // Flexbox & Alignment
      "flex flex-row justify-center flex-wrap"
    ]
  },
  indicator: {
    class: [
      // Spacing
      "mr-2 mb-2"
    ]
  },
  indicatorbutton: ({ context: e }) => ({
    class: [
      // Sizing & Shape
      "w-8 h-2 rounded-0",
      // Transitions
      "transition duration-200",
      // Focus Styles
      "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50",
      // Color & Background
      {
        "bg-surface-200 hover:bg-surface-300 dark:bg-surface-700 dark:hover:bg-surface-600": !e.highlighted,
        "bg-primary-500 hover:bg-primary-600": e.highlighted
      }
    ]
  })
}, J = {
  root: ({ props: e, state: r }) => ({
    class: [
      // Display and Position
      "inline-flex",
      "relative",
      // Shape
      "w-full md:w-56",
      "rounded-md",
      "shadow-sm",
      // Color and Background
      "bg-surface-0 dark:bg-surface-900",
      // States
      {
        "ring-1 ring-inset ring-surface-300 dark:ring-surface-700": !r.focused,
        "ring-2 ring-inset ring-primary-500 dark:ring-primary-400": r.focused
      },
      // Misc
      "cursor-default",
      "select-none",
      {
        "opacity-60": e.disabled,
        "pointer-events-none": e.disabled
      }
    ]
  }),
  label: ({ props: e }) => ({
    class: [
      //Font
      "font-sans",
      "leading-6",
      "sm:text-sm",
      // Flex & Alignment
      " flex flex-auto",
      // Sizing and Spacing
      "w-[1%]",
      "py-1.5 px-3",
      //Shape
      "rounded-none",
      // Color and Background
      "bg-transparent",
      "border-0",
      {
        "text-surface-800 dark:text-white/80": e.modelValue,
        "text-surface-400 dark:text-surface-500": !e.modelValue
      },
      "placeholder:text-surface-400 dark:placeholder:text-surface-500",
      // Transitions
      "transition",
      "duration-200",
      // States
      "focus:outline-none focus:shadow-none",
      // Misc
      "relative",
      "cursor-pointer",
      "overflow-hidden overflow-ellipsis",
      "whitespace-nowrap",
      "appearance-none"
    ]
  }),
  dropdownbutton: {
    class: [
      //Font
      "sm:text-sm",
      // Flexbox
      "flex items-center justify-center",
      "shrink-0",
      // Color and Background
      "bg-transparent",
      "text-surface-500",
      // Size
      "w-12",
      // Shape
      "rounded-tr-md",
      "rounded-br-md"
    ]
  },
  panel: {
    class: [
      // Position
      "absolute top-0 left-0",
      "mt-2",
      // Shape
      "border-0",
      "rounded-md",
      "shadow-md",
      // Color
      "bg-surface-0 dark:bg-surface-700",
      "text-surface-800 dark:text-white/80",
      "ring-1 ring-inset ring-surface-300 dark:ring-surface-700"
    ]
  },
  wrapper: {
    class: [
      // Sizing
      "max-h-[200px]",
      // Misc
      "overflow-auto"
    ]
  },
  list: {
    class: "py-1 list-none mx-1.5"
  },
  item: ({ context: e }) => ({
    class: [
      // Font
      "sm:text-sm",
      "leading-none",
      // Shape
      "border-0",
      "rounded-md",
      // Spacing
      "m-0",
      //  Colors
      {
        "text-surface-500 dark:text-white/70": !e.focused && !e.active,
        "text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-black/70": e.focused && !e.active,
        "text-surface-900 dark:text-surface-0/80 bg-surface-50 dark:bg-black/70": e.focused && e.active,
        "text-surface-900 dark:text-surface-0/80 bg-surface-50 dark:bg-black/70": !e.focused && e.active
      },
      // Hover States
      {
        "hover:bg-surface-50 dark:hover:bg-surface-800": !e.active,
        "hover:bg-surface-100 dark:hover:bg-black/40 text-surface-900 dark:text-surface-0/80": e.active
      },
      // Transitions
      "transition-shadow",
      "duration-200",
      // Misc
      "cursor-pointer",
      "overflow-hidden",
      "whitespace-nowrap"
    ]
  }),
  content: {
    class: [
      "relative",
      // Flexbox
      "flex",
      "items-center",
      // Spacing
      "py-2 px-4",
      // Misc
      "no-underline",
      "overflow-hidden",
      "cursor-pointer",
      "select-none"
    ]
  },
  groupicon: {
    class: [
      // Alignment
      "ml-auto"
    ]
  },
  sublist: {
    class: [
      // Size
      "w-full sm:w-48",
      // Spacing
      "p-1.5",
      "m-0",
      "list-none",
      // Shape
      "shadow-none sm:shadow-md",
      "border-0",
      // Position
      "static sm:absolute",
      "z-10",
      // Color
      "bg-surface-0 dark:bg-surface-700"
    ]
  },
  separator: {
    class: "border-t border-surface-200 dark:border-surface-600 my-1"
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, q = {
  root: {
    class: [
      "relative",
      // Alignment
      "inline-flex",
      "align-bottom",
      // Size
      "w-6 h-6",
      // Misc
      "select-none"
    ]
  },
  box: ({ props: e, context: r }) => ({
    class: [
      // Alignment
      "flex",
      "items-center",
      "justify-center",
      // Size
      "w-full h-full",
      // Shape
      "rounded",
      "border border-gray-b",
      // Colors
      "text-surface-600",
      {
        "bg-white dark:border-surface-700 dark:bg-surface-900": !r.checked && !e.invalid,
        "border-sky-600 bg-sky-200 dark:border-primary-400 dark:bg-primary-400": r.checked
      },
      // Invalid State
      {
        "border-red-500 dark:border-red-400": e.invalid
      },
      {
        "ring-2 ring-sky-600 dark:ring-primary-400": !e.disabled && r.focused,
        "cursor-default opacity-60": e.disabled
      },
      // States
      {
        "peer-focus-visible:ring-2 peer-focus-visible:ring-sky-600 dark:peer-focus-visible:ring-primary-400": !e.disabled,
        "cursor-default opacity-60": e.disabled
      },
      // Transitions
      "transition-colors",
      "duration-200"
    ]
  }),
  input: {
    class: [
      "peer",
      "cursor-pointer",
      // Size
      "w-full h-full",
      // Position
      "absolute",
      "top-0 left-0",
      "z-10",
      // Spacing
      "p-0",
      "m-0",
      // Shape
      "rounded",
      "border",
      // Shape
      "opacity-0",
      "rounded-md",
      "outline-none",
      "border-2 border-gray-b dark:border-surface-700",
      // Misc
      "appearance-none"
    ]
  },
  icon: {
    class: [
      // Font
      "text-normal",
      // Size
      "w-4 h-4",
      // Colors
      "text-sky-600 dark:text-surface-900",
      // Transitions
      "transition-all",
      "duration-200"
    ]
  }
}, Q = {
  root: {
    class: [
      // Flexbox
      "inline-flex items-center",
      // Spacing
      "px-2 py-0.5",
      // Shape
      "rounded-[1.14rem]",
      // Colors
      "text-surface-700 dark:text-surface-0/70",
      "bg-surface-200 dark:bg-surface-700"
    ]
  },
  label: {
    class: "text-xs leading-6 mx-0"
  },
  icon: {
    class: "leading-6 mr-2"
  },
  image: {
    class: ["w-6 h-6 mr-2", "rounded-full"]
  },
  removeIcon: {
    class: [
      // Shape
      "rounded-md leading-6",
      // Spacing
      "ml-2",
      // Size
      "w-4 h-4",
      // Transition
      "transition duration-200 ease-in-out",
      // Misc
      "cursor-pointer"
    ]
  }
}, K = {
  root: ({ props: e }) => ({
    class: [
      "flex",
      {
        "opacity-60 select-none pointer-events-none cursor-default": e.disabled
      }
    ]
  }),
  container: ({ state: e }) => ({
    class: [
      // Font
      "font-sans sm:text-sm leading-none",
      // Flex
      "flex items-center flex-wrap gap-1",
      // Spacing
      "m-0 py-1 px-3",
      // Size
      "w-full",
      // Shape
      "list-none",
      "rounded-md",
      // Color
      "text-surface-900 dark:text-surface-0",
      "bg-surface-0 dark:bg-surface-900",
      "placeholder:text-surface-400 dark:placeholder:text-surface-500",
      "shadow-sm",
      // States
      {
        "ring-1 ring-inset ring-surface-300 dark:ring-surface-700 ring-offset-0": !e.focused,
        "ring-2 ring-primary-500 dark:ring-primary-400": e.focused
      },
      // Transition
      "transition-colors duration-200",
      // Misc
      "cursor-text overflow-hidden",
      "appearance-none"
    ]
  }),
  inputtoken: {
    class: ["py-0.5 px-0", "inline-flex flex-auto"]
  },
  input: {
    class: [
      // Font
      "font-sans sm:text-sm leading-none",
      // Size
      "w-full",
      // Spacing
      "p-0 m-0",
      // Shape
      "appearance-none rounded-none",
      "border-0 outline-none",
      // Color
      "text-surface-700 dark:text-white/80",
      "bg-transparent",
      "placeholder:text-surface-400 dark:placeholder:text-surface-500"
    ]
  },
  token: {
    class: [
      // Flexbox
      "inline-flex items-center",
      // Spacing
      "py-0.5 px-3",
      // Shape
      "rounded-[1.14rem]",
      // Colors
      "text-surface-700 dark:text-white/70",
      "bg-surface-200 dark:bg-surface-700"
    ]
  },
  label: {
    class: "leading-5"
  },
  removeTokenIcon: {
    class: [
      // Shape
      "rounded-md leading-6",
      // Spacing
      "ml-2",
      // Size
      "w-4 h-4",
      // Transition
      "transition duration-200 ease-in-out",
      // Misc
      "cursor-pointer"
    ]
  }
}, Z = {
  root: ({ props: e }) => ({
    class: [
      // Display
      "inline-block",
      // Misc
      {
        "opacity-60 select-none pointer-events-none cursor-default": e.disabled
      }
    ]
  }),
  input: {
    class: [
      // Font
      "font-sans text-base ",
      // Spacing
      "m-0",
      // Size & Shape
      "rounded",
      "w-4",
      "h-4",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "border border-surface-300 dark:border-surface-700",
      // States
      "hover:border-primary-500 dark:hover:border-primary-400",
      "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400",
      // Transition
      "transition-colors duration-200",
      // Misc
      "cursor-default",
      "select-none"
    ]
  },
  panel: ({ props: e }) => ({
    class: [
      // Position & Size
      {
        "relative h-48 w-52": e.inline,
        "absolute h-48 w-52": !e.inline
      },
      // Shape
      "shadow-md",
      "border-0",
      "rounded-md",
      // Colors
      "bg-surface-800",
      "ring-1 ring-inset ring-surface-900 dark:ring-surface-600"
    ]
  }),
  selector: {
    class: [
      // Position
      "absolute top-2 left-2",
      // Size
      "h-44 w-40"
    ]
  },
  color: {
    class: [
      // Size
      "h-44 w-40"
    ],
    style: "background: linear-gradient(to top, #000 0%, rgb(0 0 0 / 0) 100%), linear-gradient(to right, #fff 0%, rgb(255 255 255 / 0) 100%)"
  },
  colorhandle: {
    class: [
      "absolute",
      // Shape
      "rounded-full border border-solid",
      // Size
      "h-3 w-3",
      // Colors
      "border-white",
      // Misc
      "cursor-pointer  opacity-85"
    ]
  },
  hue: {
    class: [
      // Position
      "absolute top-2 left-44",
      // Size
      "h-44 w-6",
      // Opacity
      "opacity-85"
    ],
    style: "background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red)"
  },
  huehandle: {
    class: [
      // Position
      "absolute left-0 -ml-1",
      // Size
      "h-2 w-8",
      // Shape
      "border-solid border-2 rounded",
      // Colors
      "border-white",
      // Misc
      "opacity-85"
    ]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, X = {
  root: {
    class: [
      // Shape
      "rounded-lg",
      "shadow-xl",
      "border-0",
      // Positioning
      "z-40 transform origin-center",
      "mt-3 absolute left-0 top-0",
      // Color
      "dark:border",
      "dark:border-surface-700",
      "bg-surface-0 dark:bg-surface-800",
      "text-surface-700 dark:text-surface-0/80",
      // Before: Arrow
      "before:absolute before:w-0 before:-top-3 before:h-0 before:border-transparent before:border-solid before:ml-6 before:border-x-[0.75rem] before:border-b-[0.75rem] before:border-t-0 before:border-b-surface-0 dark:before:border-b-surface-800"
    ]
  },
  content: {
    class: [
      // Font
      "text-sm",
      // Spacing
      "px-6",
      "py-3",
      // Colors
      "bg-surface-0 dark:bg-surface-800",
      "text-surface-600 dark:text-surface-0/70",
      // Misc
      "overflow-y-auto"
    ]
  },
  icon: {
    class: "text-xl mr-2"
  },
  footer: {
    class: [
      // Flexbox and Alignment
      "flex items-center justify-end",
      "shrink-0",
      "text-right",
      "gap-3",
      // Spacing
      "px-6",
      "py-3",
      // Shape
      "border-t-0",
      "rounded-b-lg",
      // Colors
      "bg-surface-50 dark:bg-surface-700",
      "text-surface-700 dark:text-surface-0/80"
    ]
  },
  rejectbutton: {
    root: {
      class: [
        "relative",
        // Alignments
        "items-center inline-flex text-center align-bottom justify-center",
        // Sizes & Spacing
        "px-2.5 py-1.5 min-w-[2rem]",
        "text-sm",
        // Shape
        "rounded-md",
        // Color
        "text-primary-500 dark:text-primary-400",
        // States
        "hover:bg-primary-300/20",
        "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset",
        "focus:ring-primary-500 dark:focus:ring-primary-400"
      ]
    }
  },
  acceptbutton: {
    root: {
      class: [
        "relative",
        // Alignments
        "items-center inline-flex text-center align-bottom justify-center",
        // Sizes & Spacing
        "px-2.5 py-1.5 min-w-[2rem]",
        "text-sm",
        // Shape
        "rounded-md",
        // Color
        "text-white dark:text-surface-900",
        "bg-primary-500 dark:bg-primary-400",
        "ring-1 ring-primary-500 dark:ring-primary-400",
        // States
        "hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300",
        "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-offset-current",
        "focus:ring-primary-500 dark:focus:ring-primary-400"
      ]
    }
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, ee = {
  root: {
    class: [
      // Sizing and Shape
      "min-w-[12rem]",
      "rounded-md",
      "shadow-md",
      // Spacing
      "p-1.5",
      // Colors
      "bg-surface-0 dark:bg-surface-700",
      "text-surface-700 dark:text-white/80",
      "dark:border dark:border-surface-700"
    ]
  },
  menu: {
    class: [
      // Spacings and Shape
      "list-none",
      "m-0",
      "p-0",
      "outline-none"
    ]
  },
  menuitem: {
    class: "relative"
  },
  content: ({ context: e }) => ({
    class: [
      //Shape
      "rounded-md",
      //  Colors
      {
        "text-surface-500 dark:text-white/70": !e.focused && !e.active,
        "text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-black/70": e.focused && !e.active,
        "text-surface-900 dark:text-surface-0/80 bg-surface-50 dark:bg-black/70": e.focused && e.active,
        "text-surface-900 dark:text-surface-0/80 bg-surface-50 dark:bg-black/70": !e.focused && e.active
      },
      // Hover States
      {
        "hover:bg-surface-50 dark:hover:bg-surface-800": !e.active,
        "hover:bg-surface-100 dark:hover:bg-black/40 text-surface-900 dark:text-surface-0/80": e.active
      },
      // Transitions
      "transition-shadow",
      "duration-200"
    ]
  }),
  action: {
    class: [
      "relative",
      // Font
      "font-semibold",
      // Flexbox
      "flex",
      "items-center",
      // Spacing
      "py-2",
      "px-3",
      // Misc
      "no-underline",
      "overflow-hidden",
      "cursor-pointer",
      "select-none"
    ]
  },
  icon: {
    class: [
      // Spacing
      "mr-2",
      "leading-6",
      "text-sm"
    ]
  },
  label: {
    class: ["leading-6", "text-sm"]
  },
  submenu: ({ props: e }) => ({
    class: [
      // Size
      "w-full sm:w-48",
      // Spacing
      "p-1.5",
      "m-0",
      "list-none",
      // Shape
      "shadow-md",
      "rounded-md",
      // Position
      "static sm:absolute",
      "z-10",
      {
        "sm:absolute sm:left-full sm:top-0": e.level > 1
      },
      // Color
      "bg-surface-0 dark:bg-surface-700"
    ]
  }),
  submenuicon: {
    class: ["ml-auto"]
  },
  separator: {
    class: "border-t border-surface-200 dark:border-surface-600 my-1"
  },
  transition: {
    enterFromClass: "opacity-0",
    enterActiveClass: "transition-opacity duration-250"
  }
}, re = {
  root: ({ props: e }) => ({
    class: [
      "relative",
      // Flex & Alignment
      {
        "flex flex-col": e.scrollable && e.scrollHeight === "flex"
      },
      // Size
      {
        "h-full": e.scrollable && e.scrollHeight === "flex"
      },
      // Shape
      "border-spacing-0 border-separate"
    ]
  }),
  loadingoverlay: {
    class: [
      // Position
      "absolute",
      "top-0 left-0",
      "z-20",
      // Flex & Alignment
      "flex items-center justify-center",
      // Size
      "w-full h-full",
      // Color
      "bg-gray-100/40 dark:bg-surface-800/40",
      // Transition
      "transition duration-200"
    ]
  },
  loadingicon: {
    class: "w-8 h-8 animate-spin"
  },
  wrapper: ({ props: e }) => ({
    class: [
      {
        relative: e.scrollable,
        "flex flex-col grow": e.scrollable && e.scrollHeight === "flex"
      },
      // Size
      {
        "h-full": e.scrollable && e.scrollHeight === "flex"
      }
    ]
  }),
  header: ({ props: e }) => ({
    class: [
      "font-semibold",
      // Spacing
      "py-3.5 px-3"
    ]
  }),
  table: {
    class: "w-full border-spacing-0 border-separate"
  },
  thead: ({ context: e }) => ({
    class: [{
      "top-0 z-40 sticky": e.scrollable
    }]
  }),
  tbody: ({ instance: e, context: r }) => ({
    class: [
      "border-t border-surface-300 dark:border-surface-600",
      {
        "sticky z-20 font-semibold": e.frozenRow && r.scrollable
      }
    ]
  }),
  tfoot: ({ context: e }) => ({
    class: [{
      "bottom-0 z-0": e.scrollable
    }]
  }),
  footer: {
    class: [
      "font-semibold",
      // Shape
      "border-t border-t-gray-b border-x-0",
      // Spacing
      "p-2.5",
      // Color
      "bg-surface-0 dark:bg-surface-800",
      "border-surface-200 dark:border-surface-700",
      "text-surface-700 dark:text-white/80"
    ]
  },
  column: {
    headercell: ({ context: e, props: r }) => ({
      class: [
        "font-semibold",
        "text-xs",
        "uppercase",
        "group",
        // Position
        {
          "sticky z-20 border-b": r.frozen || r.frozen === ""
        },
        {
          relative: e.resizable
        },
        // Alignment
        "text-left",
        // Shape
        {
          "border-r last:border-r-0": e == null ? void 0 : e.showGridlines
        },
        "border-0 border-b border-t border-solid",
        "border-slate-400",
        // Spacing
        (e == null ? void 0 : e.size) === "small" ? "py-1.5 px-2" : (e == null ? void 0 : e.size) === "large" ? "py-5 px-4" : "py-3.5 px-3",
        // Color
        (r.sortable === "" || r.sortable) && e.sorted ? "text-sky-900 bg-sky-200" : "text-gray-700 bg-slate-300",
        // States
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
        // Misc
        {
          "cursor-pointer": r.sortable === "" || r.sortable
        },
        {
          "overflow-hidden space-nowrap bg-clip-padding": e.resizable
        }
      ]
    }),
    headercontent: {
      class: "flex items-center"
    },
    sort: ({ context: e }) => ({
      class: [e.sorted ? "text-sky-900" : "text-gray-700", "h-4"]
    }),
    bodycell: ({ props: e, context: r, state: t, parent: a }) => ({
      class: [
        //Position
        {
          "sticky bg-inherit border-b": a.instance.frozenRow || e.frozen || e.frozen === ""
        },
        "text-sm",
        "text-slate-800",
        // Alignment
        "text-left",
        "border-0 border-b border-solid",
        {
          "last:border-r-0 border-r border-b": r == null ? void 0 : r.showGridlines
        },
        // Spacing
        {
          "py-1.5 px-2": (r == null ? void 0 : r.size) === "small" && !t.d_editing
        },
        {
          "py-5 px-4": (r == null ? void 0 : r.size) === "large" && !t.d_editing
        },
        {
          "py-3.5 px-3": (r == null ? void 0 : r.size) !== "large" && (r == null ? void 0 : r.size) !== "small" && !t.d_editing
        },
        {
          "py-[0.6rem] px-2": t.d_editing
        },
        // Color
        "border-slate-400",
        // Misc
        "space-nowrap"
      ]
    }),
    footercell: ({ context: e }) => ({
      class: [
        // Font
        "font-bold",
        // Alignment
        "text-left",
        // Shape
        {
          "border-r last:border-r-0": e == null ? void 0 : e.showGridlines
        },
        "border-0 border-t border-solid",
        // Spacing
        (e == null ? void 0 : e.size) === "small" ? "p-2" : (e == null ? void 0 : e.size) === "large" ? "p-5" : "p-4",
        // Color
        "border-surface-200 dark:border-surface-700",
        "text-surface-700 dark:text-white/80",
        "bg-surface-0 dark:bg-surface-800"
      ]
    }),
    sorticon: {
      class: "ml-2"
    },
    sortbadge: {
      class: [
        // Flex & Alignment
        "flex items-center justify-center align-middle",
        // Shape
        "rounded-full",
        // Size
        "w-[1.143rem] leading-[1.143rem]",
        // Spacing
        "ml-2",
        // Color
        "text-primary-700 dark:text-white",
        "bg-primary-50 dark:bg-primary-400/30"
      ]
    },
    columnfilter: {
      class: "inline-flex items-center ml-auto"
    },
    filteroverlay: {
      class: [
        // Position
        "absolute top-0 left-0",
        "mt-2",
        // Shape
        "border-0",
        "rounded-md",
        "shadow-md",
        // Size
        "min-w-[12.5rem]",
        // Color
        "bg-surface-0 dark:bg-surface-800",
        "text-surface-800 dark:text-white/80",
        "ring-1 ring-inset ring-surface-300 dark:ring-surface-700"
      ]
    },
    filtermatchmodedropdown: {
      root: ({ state: e }) => ({
        class: [
          // Display and Position
          "flex",
          "relative",
          // Spacing
          "mb-2",
          // Shape
          "w-full",
          "rounded-md",
          "shadow-sm",
          // Color and Background
          "bg-surface-0 dark:bg-surface-900",
          {
            "ring-1 ring-inset ring-surface-300 dark:ring-surface-700": !e.focused
          },
          // Transitions
          "transition-all",
          "duration-200",
          // States
          {
            "outline-none outline-offset-0 ring-2 ring-primary-500 dark:ring-primary-400": e.focused
          },
          // Misc
          "cursor-default",
          "select-none"
        ]
      }),
      input: ({ props: e }) => ({
        class: [
          //Font
          "font-sans",
          "leading-6",
          "sm:text-sm",
          // Display
          "block",
          "flex-auto",
          // Color and Background
          "bg-transparent",
          "border-0",
          {
            "text-surface-800 dark:text-white/80": e.modelValue,
            "text-surface-400 dark:text-surface-500": !e.modelValue
          },
          "placeholder:text-surface-400 dark:placeholder:text-surface-500",
          "py-1.5 px-3",
          //Shape
          "rounded-none",
          // Transitions
          "transition",
          "duration-200",
          // States
          "focus:outline-none focus:shadow-none",
          // Misc
          "relative",
          "cursor-pointer",
          "overflow-hidden overflow-ellipsis",
          "whitespace-nowrap",
          "appearance-none"
        ]
      })
    },
    filterrowitems: {
      class: "py-1 list-none m-0"
    },
    filterrowitem: ({ context: e }) => ({
      class: [
        // Font
        "sm:text-sm",
        "leading-none",
        {
          "font-normal": !(e != null && e.highlighted),
          "font-bold": e == null ? void 0 : e.highlighted
        },
        // Position
        "relative",
        // Shape
        "border-0",
        "rounded-none",
        // Spacing
        "m-0",
        "py-2 px-4",
        // Color
        {
          "text-surface-700 dark:text-white/80": !(e != null && e.highlighted)
        },
        {
          "bg-surface-0 dark:bg-surface-800 text-surface-700 dark:text-white/80": !(e != null && e.highlighted)
        },
        {
          "bg-primary-500 dark:bg-primary-400 text-white dark:text-surface-700": e == null ? void 0 : e.highlighted
        },
        //States
        "hover:bg-primary-500 dark:hover:bg-primary-400 hover:text-white dark:hover:text-surface-700",
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
        // Transitions
        "transition-shadow",
        "duration-200",
        // Misc
        "cursor-pointer",
        "overflow-hidden",
        "whitespace-nowrap"
      ]
    }),
    filteroperator: {
      class: [
        // Spacing
        "p-4",
        // Shape
        "border-b border-solid",
        "rounded-t-md",
        // Color
        "text-surface-700 dark:text-white/80",
        "border-surface-200 dark:border-surface-700"
      ]
    },
    filteroperatordropdown: {
      root: ({ state: e }) => ({
        class: [
          // Display and Position
          "flex",
          "relative",
          // Shape
          "w-full",
          "rounded-md",
          "shadow-sm",
          // Color and Background
          "text-surface-800 dark:text-white/80",
          "placeholder:text-surface-400 dark:placeholder:text-surface-500",
          "bg-surface-0 dark:bg-surface-900",
          {
            "ring-1 ring-inset ring-surface-300 dark:ring-surface-700": !e.focused
          },
          // Transitions
          "transition-all",
          "duration-200",
          // States
          {
            "outline-none outline-offset-0 ring-2 ring-primary-500 dark:ring-primary-400": e.focused
          },
          // Misc
          "cursor-default",
          "select-none"
        ]
      }),
      input: {
        class: [
          //Font
          "font-sans",
          "leading-6",
          "sm:text-sm",
          // Display
          "block",
          "flex-auto",
          // Color and Background
          "bg-transparent",
          "border-0",
          "text-surface-800 dark:text-white/80",
          "placeholder:text-surface-400 dark:placeholder:text-surface-500",
          "py-1.5 px-3",
          //Shape
          "rounded-none",
          // Transitions
          "transition",
          "duration-200",
          // States
          "focus:outline-none focus:shadow-none",
          // Misc
          "relative",
          "cursor-pointer",
          "overflow-hidden overflow-ellipsis",
          "whitespace-nowrap",
          "appearance-none"
        ]
      },
      trigger: {
        class: [
          // Flexbox
          "flex items-center justify-center",
          "shrink-0",
          // Color and Background
          "bg-transparent",
          "text-surface-500",
          // Size
          "w-12",
          // Shape
          "rounded-tr-md",
          "rounded-br-md"
        ]
      },
      panel: {
        class: [
          // Position
          "absolute top-0 left-0",
          "mt-2",
          // Shape
          "border-0",
          "rounded-md",
          "shadow-md",
          // Size
          "min-w-[12.5rem]",
          // Color
          "bg-surface-0 dark:bg-surface-800",
          "text-surface-800 dark:text-white/80",
          "ring-1 ring-inset ring-surface-300 dark:ring-surface-700"
        ]
      },
      list: {
        class: "py-1 list-none m-0"
      },
      item: ({ context: e }) => ({
        class: [
          // Font
          "sm:text-sm",
          "leading-none",
          {
            "font-normal": !(e != null && e.highlighted),
            "font-bold": e == null ? void 0 : e.highlighted
          },
          // Position
          "relative",
          // Shape
          "border-0",
          "rounded-none",
          // Spacing
          "m-0",
          "py-2 px-4",
          // Color
          {
            "text-surface-700 dark:text-white/80": !(e != null && e.highlighted)
          },
          {
            "bg-surface-0 dark:bg-surface-800 text-surface-700 dark:text-white/80": !(e != null && e.highlighted)
          },
          {
            "bg-primary-500 dark:bg-primary-400 text-white dark:text-surface-700": e == null ? void 0 : e.highlighted
          },
          //States
          "hover:bg-primary-500 dark:hover:bg-primary-400 hover:text-white dark:hover:text-surface-700",
          // Transitions
          "transition-shadow",
          "duration-200",
          // Misc
          "cursor-pointer",
          "overflow-hidden",
          "whitespace-nowrap"
        ]
      })
    },
    filterconstraint: {
      class: [
        // Spacing
        "p-4",
        // Shape
        "border-b border-solid",
        // Color
        "border-surface-200 dark:border-surface-700"
      ]
    },
    filteraddrule: {
      class: "pt-4 pb-2 px-4"
    },
    filteraddrulebutton: {
      root: {
        class: [
          "relative",
          // Alignments
          "items-center inline-flex text-center align-bottom justify-center",
          // Sizes & Spacing
          "text-sm px-2.5 py-1.5 min-w-[2rem] w-full",
          // Shape
          "rounded-md",
          "bg-transparent border-transparent",
          "text-primary-500 dark:text-primary-400",
          "hover:bg-primary-300/20",
          "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-offset-current",
          "focus:ring-primary-500 dark:focus:ring-primary-400",
          // Transitions
          "transition duration-200 ease-in-out",
          // Misc
          "cursor-pointer overflow-hidden select-none"
        ]
      },
      label: {
        class: "flex-auto grow-0"
      },
      icon: {
        class: "mr-2"
      }
    },
    filterremovebutton: {
      root: {
        class: [
          "relative",
          // Alignments
          "items-center inline-flex text-center align-bottom justify-center",
          // Sizes & Spacing
          "text-sm px-2.5 py-1.5 min-w-[2rem] w-full mt-2",
          // Shape
          "rounded-md",
          "bg-transparent border-transparent",
          "text-red-500 dark:text-red-400",
          "hover:bg-red-300/20",
          "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-offset-current",
          "focus:ring-red-500 dark:focus:ring-red-400",
          // Transitions
          "transition duration-200 ease-in-out",
          // Misc
          "cursor-pointer overflow-hidden select-none"
        ]
      },
      label: {
        class: "flex-auto grow-0"
      },
      icon: {
        class: "mr-2"
      }
    },
    filterbuttonbar: {
      class: [
        // Flex & Alignment
        "flex items-center justify-between",
        // Space
        "py-4 px-4"
      ]
    },
    filterclearbutton: {
      root: {
        class: [
          "relative",
          // Alignments
          "items-center inline-flex text-center align-bottom justify-center",
          // Sizes & Spacing
          "text-sm px-2.5 py-1.5 min-w-[2rem]",
          // Shape
          "rounded-md shadow-sm border-0",
          "text-primary-500 ring-1 ring-primary-500 hover:bg-primary-300/20",
          "hover:bg-primary-300/20",
          "focus:ring-primary-500 dark:focus:ring-primary-400",
          // Transitions
          "transition duration-200 ease-in-out",
          // Misc
          "cursor-pointer overflow-hidden select-none"
        ]
      }
    },
    filterapplybutton: {
      root: {
        class: [
          "relative",
          // Alignments
          "items-center inline-flex text-center align-bottom justify-center",
          // Sizes & Spacing
          "text-sm px-2.5 py-1.5 min-w-[2rem]",
          // Shape
          "rounded-md border-0",
          "text-white dark:text-surface-900",
          "bg-primary-500 dark:bg-primary-400",
          "ring-1 ring-primary-500 dark:ring-primary-400",
          "hover:bg-primary-600 dark:hover:bg-primary-300 hover:ring-primary-600 dark:hover:ring-primary-300",
          "focus:ring-primary-500 dark:focus:ring-primary-400",
          // Transitions
          "transition duration-200 ease-in-out",
          // Misc
          "cursor-pointer overflow-hidden select-none"
        ]
      }
    },
    filtermenubutton: ({ context: e }) => ({
      class: [
        "relative",
        // Flex & Alignment
        "inline-flex items-center justify-center",
        // Size
        "w-8 h-8",
        // Spacing
        "ml-2",
        // Shape
        "rounded-full",
        // Color
        {
          "bg-primary-50 text-primary-700": e.active
        },
        "dark:text-white/70 dark:hover:text-white/80 dark:bg-surface-800",
        // States
        "hover:text-surface-700 hover:bg-surface-300/20",
        "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400",
        // Transition
        "transition duration-200",
        // Misc
        "cursor-pointer no-underline overflow-hidden"
      ]
    }),
    headerfilterclearbutton: ({ context: e }) => ({
      class: [
        "relative",
        // Flex & Alignment
        "inline-flex items-center justify-center",
        "text-left",
        // Shape
        "border-none",
        // Spacing
        "m-0 p-0 ml-2",
        // Color
        "bg-transparent",
        // Misc
        "cursor-pointer no-underline overflow-hidden select-none",
        {
          invisible: !e.hidden
        }
      ]
    }),
    rowtoggler: {
      class: [
        "relative",
        // Flex & Alignment
        "inline-flex items-center justify-center",
        "text-left",
        // Spacing
        "m-0 p-0",
        // Size
        "w-8 h-8",
        // Shape
        "border-0 rounded-full",
        // Color
        "text-surface-500 dark:text-white/70",
        "bg-transparent",
        "focus-visible:outline-none focus-visible:outline-offset-0",
        "focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
        // Transition
        "transition duration-200",
        // Misc
        "overflow-hidden",
        "cursor-pointer select-none"
      ]
    },
    columnresizer: {
      class: [
        "block",
        // Position
        "absolute top-0 right-0",
        // Sizing
        "w-2 h-full",
        // Spacing
        "m-0 p-0",
        // Color
        "border border-transparent",
        // Misc
        "cursor-col-resize"
      ]
    },
    rowreordericon: {
      class: "cursor-move"
    },
    roweditorinitbutton: {
      class: [
        "relative",
        // Flex & Alignment
        "inline-flex items-center justify-center",
        "text-left",
        // Size
        "w-8 h-8",
        // Shape
        "border-0 rounded-full",
        // Color
        "text-surface-700 dark:text-white/70",
        "border-transparent",
        // States
        "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400",
        "hover:text-surface-700 hover:bg-surface-300/20",
        // Transition
        "transition duration-200",
        // Misc
        "overflow-hidden",
        "cursor-pointer select-none"
      ]
    },
    roweditorsavebutton: {
      class: [
        "relative",
        // Flex & Alignment
        "inline-flex items-center justify-center",
        "text-left",
        // Size
        "w-8 h-8",
        // Shape
        "border-0 rounded-full",
        // Color
        "text-surface-700 dark:text-white/70",
        "border-transparent",
        // States
        "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400",
        "hover:text-surface-700 hover:bg-surface-300/20",
        // Transition
        "transition duration-200",
        // Misc
        "overflow-hidden",
        "cursor-pointer select-none"
      ]
    },
    roweditorcancelbutton: {
      class: [
        "relative",
        // Flex & Alignment
        "inline-flex items-center justify-center",
        "text-left",
        // Size
        "w-8 h-8",
        // Shape
        "border-0 rounded-full",
        // Color
        "text-surface-700 dark:text-white/70",
        "border-transparent",
        // States
        "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400",
        "hover:text-surface-700 hover:bg-surface-300/20",
        // Transition
        "transition duration-200",
        // Misc
        "overflow-hidden",
        "cursor-pointer select-none"
      ]
    },
    radiobuttonwrapper: {
      class: [
        "relative",
        // Flex & Alignment
        "inline-flex align-bottom",
        // Size
        "w-4 h-4",
        // Misc
        "cursor-pointer select-none"
      ]
    },
    radiobutton: ({ context: e }) => ({
      class: [
        // Flexbox
        "flex justify-center items-center",
        // Size
        "w-4 h-4",
        "text-sm",
        "font-medium",
        // Shape
        "border-2",
        "rounded-full",
        // Color
        {
          "text-surface-700 dark:text-white/80": !e.checked
        },
        {
          "bg-surface-0 dark:bg-surface-900": !e.checked
        },
        {
          "border-surface-300 dark:border-surface-700": !e.checked
        },
        {
          "border-primary-500 dark:border-primary-400": e.checked
        },
        // States
        {
          "hover:border-primary-500 dark:hover:border-primary-400": !e.disabled
        },
        {
          "ring-2 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-800 ring-primary-500 dark:ring-primary-400": e.focused
        },
        // Transition
        "transition duration-200 ease-in-out",
        // Misc
        {
          "cursor-default opacity-60": e.disabled
        }
      ]
    }),
    radiobuttonicon: {
      class: "hidden"
    },
    headercheckboxwrapper: {
      class: [
        "relative",
        // Flex & Alignment
        "inline-flex align-bottom",
        // Size
        "w-4",
        "h-4",
        // Misc
        "cursor-default select-none"
      ]
    },
    headercheckbox: ({ context: e }) => ({
      class: [
        // Flex & Alignment
        "flex items-center justify-center",
        // Shape
        "rounded",
        "border",
        // Size
        "w-4",
        "h-4",
        // Color
        "text-surface-600",
        {
          "border-surface-300 bg-surface-0 dark:border-surface-700 dark:bg-surface-900": !e.checked,
          "border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400": e.checked
        },
        // States
        "focus:outline-none focus:outline-offset-0",
        {
          "ring-2 ring-primary-500 dark:ring-primary-400": e.focused
        },
        // Transition
        "transition-colors duration-200",
        // Misc
        {
          "cursor-default opacity-60": e.disabled
        }
      ]
    }),
    headercheckboxicon: {
      class: [
        // Font
        "text-normal",
        // Size
        "w-3",
        "h-3",
        // Color
        "text-white dark:text-surface-900",
        // Transition
        "transition-all duration-200"
      ]
    },
    checkboxwrapper: {
      class: [
        "relative",
        // Flex & Alignment
        "inline-flex align-bottom",
        // Size
        "w-4",
        "h-4",
        // Misc
        "cursor-default select-none"
      ]
    },
    checkbox: ({ context: e }) => ({
      class: [
        // Flex & Alignment
        "flex items-center justify-center",
        // Shape
        "rounded",
        "border",
        // Size
        "w-4",
        "h-4",
        // Color
        "text-surface-600",
        {
          "border-surface-300 bg-surface-0 dark:border-surface-700 dark:bg-surface-900": !e.checked,
          "border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400": e.checked
        },
        // States
        "focus:outline-none focus:outline-offset-0",
        {
          "ring-2 ring-primary-500 dark:ring-primary-400": e.focused
        },
        // Transition
        "transition-colors duration-200",
        // Misc
        {
          "cursor-default opacity-60": e.disabled
        }
      ]
    }),
    checkboxicon: {
      class: [
        // Font
        "text-normal",
        // Size
        "w-3",
        "h-3",
        // Color
        "text-white dark:text-surface-900",
        // Transition
        "transition-all duration-200"
      ]
    },
    transition: {
      enterFromClass: "opacity-0 scale-y-[0.8]",
      enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
      leaveActiveClass: "transition-opacity duration-100 ease-linear",
      leaveToClass: "opacity-0"
    }
  },
  bodyrow: ({ context: e, props: r }) => ({
    class: [
      "data-table-row",
      // Color
      "dark:text-white/80",
      {
        "even:bg-slate-200 even:text-slate-900 odd:bg-white": e.stripedRows && !e.selected
      },
      {
        "bg-sky-200": e.selected
      },
      // State
      {
        "focus:bg-sky-200": r.selectionMode
      },
      {
        "hover:bg-sky-100 hover:text-slate-900": r.selectionMode && !e.selected
      },
      // Misc
      {
        "cursor-pointer": r.selectionMode
      }
    ]
  }),
  rowexpansion: {
    class: "bg-surface-0 dark:bg-surface-800 text-surface-600 dark:text-white/80"
  },
  rowgroupheader: {
    class: ["sticky z-20", "bg-surface-0 text-surface-600 dark:text-white/70", "dark:bg-surface-800"]
  },
  rowgroupfooter: {
    class: ["sticky z-20", "bg-surface-0 text-surface-600 dark:text-white/70", "dark:bg-surface-800"]
  },
  rowgrouptoggler: {
    class: [
      "relative",
      // Flex & Alignment
      "inline-flex items-center justify-center",
      "text-left",
      // Spacing
      "m-0 p-0",
      // Size
      "w-8 h-8",
      // Shape
      "border-0 rounded-full",
      // Color
      "text-surface-500 dark:text-white/70",
      "bg-transparent",
      "focus-visible:outline-none focus-visible:outline-offset-0",
      "focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      // Transition
      "transition duration-200",
      // Misc
      "overflow-hidden",
      "cursor-pointer select-none"
    ]
  },
  rowgrouptogglericon: {
    class: "inline-block w-4 h-4"
  },
  resizehelper: {
    class: "absolute hidden w-[2px] z-20 bg-sky-500"
  }
}, te = {
  content: {
    class: [
      // Spacing
      "p-0",
      // Shape
      "border-0",
      // Color
      "text-surface-700 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-800"
    ]
  },
  grid: {
    class: [
      // flex
      "flex flex-wrap",
      // Spacing
      "ml-0 mr-0 mt-0",
      // Color
      "bg-surface-0 dark:bg-surface-800"
    ]
  },
  header: {
    class: [
      "font-semibold",
      // Spacing
      "p-6",
      // Color
      "text-surface-800 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-800",
      "border-surface-200 dark:border-surface-700 border-b"
    ]
  }
}, ae = {
  listbutton: ({ props: e }) => ({
    class: [
      // Font
      "leading-none",
      // Flex Alignment
      "inline-flex items-center align-bottom text-center",
      // Shape
      "rounded-md rounded-r-none",
      // Spacing
      "px-2.5 py-1.5",
      // Color
      "ring-1 ring-surface-200 dark:ring-surface-700",
      e.modelValue === "list" ? "bg-surface-100 dark:bg-surface-700 text-surface-700 dark:text-surface-0" : "bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-white/80",
      // States
      "focus:outline-none focus:outline-offset-0 focus:ring-primary-500 dark:focus:ring-primary-400",
      "hover:bg-surface-200 dark:hover:bg-surface-600/80",
      // Transition
      "transition duration-200",
      // Misc
      "cursor-pointer select-none overflow-hidden"
    ]
  }),
  gridbutton: ({ props: e }) => ({
    class: [
      // Font
      "leading-none",
      // Flex Alignment
      "inline-flex items-center align-bottom text-center",
      // Shape
      "rounded-md rounded-l-none",
      // Spacing
      "px-2.5 py-1.5",
      // Color
      "ring-1 ring-surface-200 dark:ring-surface-700",
      e.modelValue === "grid" ? "bg-surface-100 dark:bg-surface-700 text-surface-700 dark:text-surface-0" : "bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-white/80",
      // States
      "focus:outline-none focus:outline-offset-0 focus:ring-primary-500 dark:focus:ring-primary-400",
      "hover:bg-surface-200 dark:hover:bg-surface-600/80",
      // Transition
      "transition duration-200",
      // Misc
      "cursor-pointer select-none overflow-hidden"
    ]
  })
}, se = {
  root: ({ state: e }) => ({
    class: [
      // Shape
      "rounded-lg",
      "shadow-xl",
      "border-0",
      // Size
      "m-0",
      // Transitions
      "transform",
      "scale-100",
      // Color
      "dark:border",
      "dark:border-surface-700",
      "bg-white",
      // Maximized State
      {
        "transition-none": e.maximized,
        "transform-none": e.maximized,
        "!w-screen": e.maximized,
        "!h-screen": e.maximized,
        "!max-h-full": e.maximized,
        "!top-0": e.maximized,
        "!left-0": e.maximized
      }
    ]
  }),
  header: ({ props: e }) => ({
    class: [
      // Flexbox and Alignment
      "flex items-center justify-between",
      "shrink-0",
      // Spacing
      "py-2 pr-2 pl-4",
      // Shape
      "rounded-tl-lg",
      "rounded-tr-lg",
      "border-b border-gray-300 text-lg",
      {
        "cursor-move": e.draggable
      }
    ]
  }),
  title: {
    class: ["font-semibold text-base leading-6"]
  },
  icons: {
    class: ["flex items-center"]
  },
  closeButton: {
    class: [
      "relative",
      // Flexbox and Alignment
      "flex items-center justify-center",
      // Size and Spacing
      "mr-2",
      "last:mr-0",
      "w-6 h-6",
      // Shape
      "border-0",
      "rounded-full",
      // Colors
      "text-surface-500",
      "bg-transparent",
      // Transitions
      "transition duration-200 ease-in-out",
      // States
      "hover:text-surface-700 dark:hover:text-white/80",
      "hover:bg-surface-100 dark:hover:bg-surface-800/80",
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-inset",
      "focus:ring-primary-500 dark:focus:ring-primary-400",
      // Misc
      "overflow-hidden"
    ]
  },
  maximizablebutton: {
    class: [
      "relative",
      // Flexbox and Alignment
      "flex items-center justify-center",
      // Size and Spacing
      "mr-2",
      "last:mr-0",
      "w-6 h-6",
      // Shape
      "border-0",
      "rounded-full",
      // Colors
      "text-surface-500",
      "bg-transparent",
      // Transitions
      "transition duration-200 ease-in-out",
      // States
      "hover:text-surface-700 dark:hover:text-white/80",
      "hover:bg-surface-100 dark:hover:bg-surface-800/80",
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-inset",
      "focus:ring-primary-500 dark:focus:ring-primary-400",
      // Misc
      "overflow-hidden"
    ]
  },
  closeButtonIcon: {
    class: [
      // Display
      "inline-block",
      // Size
      "w-3",
      "h-3"
    ]
  },
  maximizableicon: {
    class: [
      // Display
      "inline-block",
      // Size
      "w-3",
      "h-3"
    ]
  },
  content: ({ state: e, instance: r }) => ({
    class: [
      // Spacing
      "p-4",
      // Shape
      {
        grow: e.maximized,
        "rounded-bl-lg": !r.$slots.footer,
        "rounded-br-lg": !r.$slots.footer
      },
      // Misc
      "overflow-y-auto"
    ]
  }),
  footer: {
    class: [
      // Flexbox and Alignment
      "flex items-center justify-end",
      "shrink-0",
      "text-right",
      "gap-3",
      // Spacing
      "p-2",
      // Shape
      "border-t border-gray-300",
      "rounded-b-lg",
      // Colors
      "bg-gray-100 dark:bg-surface-700"
    ]
  },
  mask: ({ props: e, state: r }) => ({
    class: [
      // Transitions
      "transition",
      "duration-200",
      {
        "p-5": !r.maximized
      },
      // Background and Effects
      {
        "bg-gray-300/60 dark:bg-surface-700/70": e.modal
      }
    ]
  }),
  transition: ({ props: e }) => e.position === "top" ? {
    enterFromClass: "opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0",
    enterActiveClass: "transition-all duration-200 ease-out",
    leaveActiveClass: "transition-all duration-200 ease-out",
    leaveToClass: "opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0"
  } : e.position === "bottom" ? {
    enterFromClass: "opacity-0 scale-75 translate-y-full",
    enterActiveClass: "transition-all duration-200 ease-out",
    leaveActiveClass: "transition-all duration-200 ease-out",
    leaveToClass: "opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0"
  } : e.position === "left" || e.position === "topleft" || e.position === "bottomleft" ? {
    enterFromClass: "opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0",
    enterActiveClass: "transition-all duration-200 ease-out",
    leaveActiveClass: "transition-all duration-200 ease-out",
    leaveToClass: "opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0"
  } : e.position === "right" || e.position === "topright" || e.position === "bottomright" ? {
    enterFromClass: "opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0",
    enterActiveClass: "transition-all duration-200 ease-out",
    leaveActiveClass: "transition-all duration-200 ease-out",
    leaveToClass: "opacity-0 scale-75 opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0"
  } : {
    enterFromClass: "opacity-0 scale-75",
    enterActiveClass: "transition-all duration-200 ease-out",
    leaveActiveClass: "transition-all duration-200 ease-out",
    leaveToClass: "opacity-0 scale-75"
  }
}, oe = {
  root: ({ props: e }) => ({
    class: [
      // Flex and Position
      "flex relative",
      {
        "justify-center": e.layout == "vertical"
      },
      {
        "items-center": e.layout == "vertical"
      },
      {
        "justify-start": (e == null ? void 0 : e.align) == "left" && e.layout == "horizontal",
        "justify-center": (e == null ? void 0 : e.align) == "center" && e.layout == "horizontal",
        "justify-end": (e == null ? void 0 : e.align) == "right" && e.layout == "horizontal",
        "items-center": (e == null ? void 0 : e.align) == "top" && e.layout == "vertical",
        "items-start": (e == null ? void 0 : e.align) == "center" && e.layout == "vertical",
        "items-end": (e == null ? void 0 : e.align) == "bottom" && e.layout == "vertical"
      },
      // Spacing
      {
        "my-5 mx-0 py-0 px-5": e.layout == "horizontal",
        "mx-4 md:mx-5 py-5": e.layout == "vertical"
      },
      // Size
      {
        "w-full": e.layout == "horizontal",
        "min-h-full": e.layout == "vertical"
      },
      // Before: Line
      "before:block",
      // Position
      {
        "before:absolute before:left-0 before:top-1/2": e.layout == "horizontal",
        "before:absolute before:left-1/2 before:top-0 before:transform before:-translate-x-1/2": e.layout == "vertical"
      },
      // Size
      {
        "before:w-full": e.layout == "horizontal",
        "before:min-h-full": e.layout == "vertical"
      },
      // Shape
      {
        "before:border-solid": e.type == "solid",
        "before:border-dotted": e.type == "dotted",
        "before:border-dashed": e.type == "dashed"
      },
      // Color
      {
        "before:border-t before:border-surface-200 before:dark:border-surface-600": e.layout == "horizontal",
        "before:border-l before:border-surface-200 before:dark:border-surface-600": e.layout == "vertical"
      }
    ]
  }),
  content: {
    class: [
      // Space and Position
      "p-2 z-10",
      // Color
      "bg-surface-0 dark:bg-surface-800"
    ]
  }
}, ie = {
  root: ({ props: e }) => ({
    class: [
      // Positioning
      "absolute z-1",
      {
        "left-0 bottom-0 w-full": e.position == "bottom",
        "left-0 top-0 w-full": e.position == "top",
        "left-0 top-0 h-full": e.position == "left",
        "right-0 top-0 h-full": e.position == "right"
      },
      // Flexbox & Alignment
      "flex justify-center items-center",
      // Interactivity
      "pointer-events-none"
    ]
  }),
  container: {
    class: [
      // Flexbox
      "flex",
      // Shape & Border
      "rounded-md",
      // Color
      "bg-surface-0/10 dark:bg-surface-900/20 border border-surface-0/20",
      "backdrop-blur-sm",
      // Spacing
      "p-2",
      // Misc
      "pointer-events-auto"
    ]
  },
  menu: ({ props: e }) => ({
    class: [
      // Flexbox & Alignment
      "flex items-center justify-center",
      {
        "flex-col": e.position == "left" || e.position == "right"
      },
      // List Style
      "m-0 p-0 list-none",
      // Shape
      "outline-none"
    ]
  }),
  menuitem: ({ props: e, context: r, instance: t }) => ({
    class: [
      // Spacing & Shape
      "p-2 rounded-md",
      // Conditional Scaling
      {
        "hover:scale-150": t.currentIndex === r.index,
        "scale-125": t.currentIndex - 1 === r.index || t.currentIndex + 1 === r.index,
        "scale-110": t.currentIndex - 2 === r.index || t.currentIndex + 2 === r.index
      },
      // Positioning & Hover States
      {
        "origin-bottom hover:mx-6": e.position == "bottom",
        "origin-top hover:mx-6": e.position == "top",
        "origin-left hover:my-6": e.position == "left",
        "origin-right hover:my-6": e.position == "right"
      },
      // Transitions & Transform
      "transition-all duration-200 ease-cubic-bezier-will-change-transform transform"
    ]
  }),
  action: {
    class: [
      // Flexbox & Alignment
      "flex flex-col items-center justify-center",
      // Position
      "relative",
      // Size
      "w-16 h-16",
      // Misc
      "cursor-default overflow-hidden"
    ]
  }
}, ne = {
  root: {
    class: [
      "block",
      // Spacing
      "px-5 md:px-6 py-5",
      // Shape
      "rounded-md rounded-lg",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-surface-0/80",
      "ring-1 ring-inset ring-surface-300 dark:ring-surface-700 ring-offset-0"
    ]
  },
  legend: ({ props: e }) => ({
    class: [
      // Font
      "font-medium",
      "leading-none",
      //Spacing
      {
        "p-0": e.toggleable,
        "px-3 py-1.5": !e.toggleable
      },
      // Shape
      "rounded-md",
      // Color
      "text-surface-700 dark:text-surface-0/80",
      "bg-surface-0 dark:bg-surface-900",
      // Transition
      "transition-none",
      // States
      {
        "": e.toggleable
      },
      {
        "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-primary-600 ring-inset dark:focus:ring-primary-500": e.toggleable
      }
    ]
  }),
  toggler: ({ props: e }) => ({
    class: [
      // Alignments
      "flex items-center justify-center",
      "relative",
      //Spacing
      {
        "px-3 py-1.5": e.toggleable
      },
      // Shape
      {
        "rounded-md": e.toggleable
      },
      // Color
      {
        "text-surface-700 dark:text-surface-200 hover:text-surface-900 hover:text-surface-900": e.toggleable
      },
      // States
      {
        "hover:text-surface-900 dark:hover:text-surface-100": e.toggleable
      },
      {
        "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:focus:ring-primary-500": e.toggleable
      },
      // Misc
      {
        "transition-none cursor-pointer overflow-hidden select-none": e.toggleable
      }
    ]
  }),
  togglerIcon: {
    class: "mr-2 inline-block"
  },
  legendTitle: {
    class: "flex items-center justify-center leading-none"
  },
  content: {
    class: "p-0"
  },
  transition: {
    enterFromClass: "max-h-0",
    enterActiveClass: "overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",
    enterToClass: "max-h-[1000px]",
    leaveFromClass: "max-h-[1000px]",
    leaveActiveClass: "overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]",
    leaveToClass: "max-h-0"
  }
}, le = {
  css: `
    *[data-pd-ripple="true"]{
        overflow: hidden;
        position: relative;
    }
    span[data-p-ink-active="true"]{
        animation: ripple 0.4s linear;
    }
    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }

    .progress-spinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progress-spinner-dash{
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }

        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progress-spinner-color {
        100%, 0% {
            stroke: #ff5757;
        }
        40% {
            stroke: #696cff;
        }
        66% {
            stroke: #1ea97c;
        }
        80%, 90% {
            stroke: #cc8925;
        }
    }

    .progressbar-value-animate::after {
        will-change: left, right;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    }
    .progressbar-value-animate::before {
        will-change: left, right;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }
    @keyframes p-progressbar-indeterminate-anim {
        0% {
            left: -35%;
            right: 100%;
        }
        60% {
            left: 100%;
            right: -90%;
        }
        100% {
            left: 100%;
            right: -90%;
        }
    }
`
}, de = {
  root: ({ props: e }) => ({
    class: [
      "inline-flex items-center justify-center align-top gap-2",
      "py-2 px-3 m-0 rounded-md",
      "ring-1 ring-inset ring-surface-200 dark:ring-surface-700 ring-offset-0",
      {
        "text-blue-500 dark:text-blue-300": e.severity == "info",
        "text-green-500 dark:text-green-300": e.severity == "success",
        "text-orange-500 dark:text-orange-300": e.severity == "warn",
        "text-red-500 dark:text-red-300": e.severity == "error"
      }
    ]
  }),
  icon: {
    class: [
      // Sizing and Spacing
      "w-4 h-4",
      "shrink-0"
    ]
  },
  text: {
    class: [
      // Font and Text
      "text-sm leading-none",
      "font-medium"
    ]
  }
}, ue = {
  root: {
    class: ["flex items-stretch", "w-full"]
  }
}, ce = {
  root: {
    class: [
      // Flex
      "flex items-center justify-center",
      // Shape
      "first:rounded-l-md",
      "last:rounded-r-md",
      "border-y",
      "last:border-r",
      "border-l",
      "border-r-0",
      // Space
      "p-1.5",
      // Size
      "min-w-[3rem]",
      // Color
      "bg-surface-50 dark:bg-surface-800",
      "text-surface-600 dark:text-surface-400",
      "border-surface-300 dark:border-surface-600"
    ]
  }
}, fe = {
  root: ({ context: e }) => ({
    class: [
      // Font
      "font-sans leading-6",
      // Spacing
      "m-0 py-1.5 px-3 sm:text-sm",
      // Colors
      "text-surface-900 dark:text-surface-0",
      "placeholder:text-surface-400 dark:placeholder:text-surface-500",
      "bg-surface-0 dark:bg-surface-900",
      "ring-1 ring-inset ring-surface-300 dark:ring-surface-700 ring-offset-0",
      "shadow-sm",
      // Shape
      "rounded-md",
      "appearance-none",
      // Interactions
      {
        "outline-none focus:ring-primary-500 dark:focus:ring-primary-400": !e.disabled,
        "opacity-60 select-none pointer-events-none cursor-default": e.disabled
      }
    ]
  })
}, be = {
  root: ({ props: e, parent: r }) => ({
    class: [
      // Display
      "inline-flex",
      {
        "flex-col": e.showButtons && e.buttonLayout == "vertical"
      },
      //Sizing
      {
        "!w-16": e.showButtons && e.buttonLayout == "vertical"
      },
      // Shape
      {
        "first:rounded-l-md rounded-none last:rounded-r-md": r.instance.$name == "InputGroup" && !e.showButtons
      },
      {
        "border-0 border-y border-l last:border-r border-gray-b dark:border-surface-600": r.instance.$name == "InputGroup" && !e.showButtons
      },
      {
        "ring-1 ring-gray-b dark:ring-surface-700 ring-offset-0 focus-within:ring-sky-600 dark:focus:ring-primary-400": r.instance.$name !== "InputGroup"
      },
      "shadow-sm",
      "rounded-md"
    ]
  }),
  pcInput: {
    root: ({ parent: e }) => ({
      class: [
        // Display
        "flex flex-auto min-w-0 w-16",
        //Text
        "sm:text-sm",
        {
          "text-center": e.props.showButtons && e.props.buttonLayout == "vertical"
        },
        // Spacing
        "m-0",
        "py-1.5 px-3",
        // Shape
        "rounded-md",
        {
          "rounded-tr-none rounded-br-none": e.props.showButtons
        },
        {
          "rounded-tl-none rounded-bl-none": e.props.showButtons && e.props.buttonLayout == "horizontal"
        },
        {
          "rounded-none": e.props.showButtons && e.props.buttonLayout == "vertical"
        },
        // Colors
        "text-surface-900 dark:text-surface-0",
        "placeholder:text-surface-400 dark:placeholder:text-surface-500",
        "bg-surface-0 dark:bg-surface-900",
        {
          "border-r border-gray-b dark:border-surface-700": e.props.showButtons && e.props.buttonLayout == "stacked"
        },
        {
          "border-x border-gray-b dark:border-surface-700": e.props.showButtons && e.props.buttonLayout == "horizontal"
        },
        {
          "border-y border-gray-b dark:border-surface-700": e.props.showButtons && e.props.buttonLayout == "vertical"
        },
        "outline-none",
        //Position
        {
          "order-2": e.props.buttonLayout == "horizontal" || e.props.buttonLayout == "vertical"
        }
      ]
    })
  },
  buttongroup: {
    class: ["flex", "flex-col"]
  },
  incrementbutton: {
    root: ({ parent: e }) => ({
      class: [
        // Display
        "flex flex-auto",
        // Alignment
        "items-center",
        "justify-center",
        "text-center align-bottom",
        //Position
        "relative",
        {
          "order-3": e.props.showButtons && e.props.buttonLayout == "horizontal"
        },
        {
          "order-1": e.props.showButtons && e.props.buttonLayout == "vertical"
        },
        //Color
        "text-surface-600 dark:text-surface-400",
        "bg-surface-0 dark:bg-surface-800",
        // Sizing
        "w-[3rem]",
        {
          "px-2.5 py-1.5": e.props.showButtons && e.props.buttonLayout !== "stacked"
        },
        {
          "p-0": e.props.showButtons && e.props.buttonLayout == "stacked"
        },
        {
          "w-full": e.props.showButtons && e.props.buttonLayout == "vertical"
        },
        // Shape
        "rounded-md",
        {
          "rounded-tl-none rounded-br-none rounded-bl-none": e.props.showButtons && e.props.buttonLayout == "stacked"
        },
        {
          "rounded-bl-none rounded-tl-none": e.props.showButtons && e.props.buttonLayout == "horizontal"
        },
        {
          "rounded-bl-none rounded-br-none": e.props.showButtons && e.props.buttonLayout == "vertical"
        },
        //States
        "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 focus:dark:ring-primary-500",
        "hover:bg-surface-50 dark:hover:bg-surface-700",
        //Misc
        "cursor-pointer overflow-hidden select-none"
      ]
    }),
    label: {
      class: "h-0 w-0"
    }
  },
  decrementbutton: {
    root: ({ parent: e }) => ({
      class: [
        // Display
        "flex flex-auto",
        // Alignment
        "items-center",
        "justify-center",
        "text-center align-bottom",
        //Position
        "relative",
        {
          "order-1": e.props.showButtons && e.props.buttonLayout == "horizontal"
        },
        {
          "order-3": e.props.showButtons && e.props.buttonLayout == "vertical"
        },
        //Color
        "text-surface-600 dark:text-surface-400",
        "bg-surface-0 dark:bg-surface-800",
        // Sizing
        "w-[3rem]",
        {
          "px-2.5 py-1.5": e.props.showButtons && e.props.buttonLayout !== "stacked"
        },
        {
          "p-0": e.props.showButtons && e.props.buttonLayout == "stacked"
        },
        {
          "w-full": e.props.showButtons && e.props.buttonLayout == "vertical"
        },
        // Shape
        "rounded-md",
        {
          "rounded-tr-none rounded-tl-none rounded-bl-none": e.props.showButtons && e.props.buttonLayout == "stacked"
        },
        {
          "rounded-tr-none rounded-br-none ": e.props.showButtons && e.props.buttonLayout == "horizontal"
        },
        {
          "rounded-tr-none rounded-tl-none ": e.props.showButtons && e.props.buttonLayout == "vertical"
        },
        //States
        "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 focus:dark:ring-primary-500",
        "hover:bg-surface-50 dark:hover:bg-surface-700",
        //Misc
        "cursor-pointer overflow-hidden select-none"
      ]
    }),
    label: {
      class: "h-0 w-0"
    }
  }
}, ge = {
  root: ({ props: e, state: r }) => ({
    class: [
      // Alignments
      "inline-flex relative",
      "shrink-0",
      // Shape
      "rounded-2xl",
      // Size
      "h-5 w-9",
      // States
      {
        "outline-none outline-offset-0 ring-2 ring-primary-500 ring-offset-2 ring-offset-white dark:ring-offset-gray-900 dark:ring-primary-400": r.focused
      },
      {
        "opacity-60 select-none pointer-events-none cursor-default": e.disabled
      }
    ]
  }),
  slider: ({ props: e }) => ({
    class: [
      // Position
      "absolute top-0 left-0 right-0 bottom-0",
      // Shape
      "rounded-2xl",
      // Before:
      "before:absolute before:top-1/2",
      "before:-mt-2",
      "before:h-4 before:w-4",
      "before:rounded-full",
      "before:duration-200 before:transition before:ease-in-out",
      "before:bg-surface-0 before:dark:bg-surface-900",
      "before:shadow",
      {
        "before:transform before:translate-x-4": e.modelValue
      },
      // Colors
      "border-2 border-transparent",
      {
        "bg-surface-200 dark:bg-surface-700": !e.modelValue,
        "bg-primary-500 dark:bg-primary-400": e.modelValue
      },
      // States
      {
        "hover:bg-surface-300 hover:dark:bg-surface-600 ": !e.modelValue
      },
      // Transition
      "transition-colors duration-200",
      // Misc
      "cursor-pointer"
    ]
  })
}, me = {
  root: ({ props: e, context: r, parent: t }) => ({
    class: [
      // Font
      "font-sans leading-6",
      // Spacing
      "m-0 w-16",
      {
        "py-3 px-4 text-lg sm:text-md": e.size == "large",
        "py-1 px-2 sm:text-sm": e.size == "small",
        "py-1.5 px-2 sm:text-sm": e.size == null
      },
      // Colors
      "text-surface-900 dark:text-surface-0",
      "placeholder:text-surface-400 dark:placeholder:text-surface-500",
      "bg-surface-0 dark:bg-surface-900",
      "shadow-sm",
      {
        "ring-1 ring-inset ring-gray-b dark:ring-surface-700 ring-offset-0": t.instance.$name !== "InputGroup"
      },
      // Shape
      {
        "rounded-md": t.instance.$name !== "InputGroup"
      },
      {
        "first:rounded-l-md rounded-none last:rounded-r-md": t.instance.$name == "InputGroup"
      },
      {
        "border-0 border-y border-l last:border-r border-surface-300 dark:border-surface-600": t.instance.$name == "InputGroup"
      },
      {
        "first:ml-0 ml-[-1px]": t.instance.$name == "InputGroup" && !e.showButtons
      },
      "appearance-none",
      // Interactions
      {
        "outline-none focus:ring-sky-600 dark:focus:ring-primary-400": !r.disabled,
        "opacity-60 select-none pointer-events-none cursor-default": r.disabled
      }
    ]
  })
}, pe = {
  root: ({ props: e }) => ({
    class: [
      // Misc
      {
        "opacity-60 select-none pointer-events-none cursor-default": e.disabled
      }
    ]
  }),
  range: {
    class: [
      // Stroke
      "stroke-current",
      // Color
      "stroke-surface-200 dark:stroke-surface-700",
      // Fill
      "fill-none",
      // Transition
      "transition duration-100 ease-in"
    ]
  },
  value: {
    class: [
      // Animation
      "animate-dash-frame",
      // Color
      "stroke-primary-500 dark:stroke-primary-400",
      // Fill
      "fill-none"
    ]
  },
  label: {
    class: [
      // Text Style
      "text-center text-xl",
      // Color
      "fill-surface-600 dark:fill-surface-200"
    ]
  }
}, ye = {
  root: {
    class: [
      // Sizing and Shape
      "min-w-[12rem]",
      "rounded-md",
      // Spacing
      // Colors
      "bg-surface-0 dark:bg-surface-700",
      "text-surface-700 dark:text-white/80",
      "ring-1 ring-surface-200 dark:ring-surface-700"
    ]
  },
  wrapper: {
    class: [
      // Overflow
      "overflow-auto"
    ]
  },
  list: {
    class: "py-1 list-none m-0"
  },
  item: ({ context: e }) => ({
    class: [
      // Font
      "sm:text-sm",
      "leading-none",
      {
        "font-normal": !e.selected,
        "font-bold": e.selected
      },
      // Position
      "relative",
      // Shape
      "border-0",
      "rounded-none",
      // Spacing
      "m-0",
      "py-2 px-4",
      // Color
      {
        "text-surface-700 dark:text-white/80": !e.focused && !e.selected
      },
      {
        "bg-surface-200 dark:bg-surface-600/60 text-surface-700 dark:text-white/80": e.focused && !e.selected
      },
      {
        "bg-primary-500 dark:bg-primary-400 text-white dark:text-surface-700": e.focused && e.selected
      },
      {
        "bg-surface-100 dark:bg-surface-300/10 text-primary-500 dark:text-primary-400": !e.focused && e.selected
      },
      //States
      "hover:bg-primary-500 dark:hover:bg-primary-400 hover:text-white dark:hover:text-surface-700",
      "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      // Misc
      "cursor-pointer",
      "overflow-hidden",
      "whitespace-nowrap"
    ]
  }),
  itemgroup: {
    class: [
      //Font
      "font-bold",
      "sm:text-sm",
      // Spacing
      "m-0",
      "py-2 px-4",
      // Color
      "text-surface-800 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-600/80",
      // Misc
      "cursor-auto"
    ]
  },
  header: {
    class: [
      // Spacing
      "p-0",
      "m-0",
      //Shape
      "rounded-tl-md",
      "rounded-tr-md",
      "border-b border-surface-200 dark:border-surface-700",
      // Color
      "text-surface-700 dark:text-white/80",
      "bg-surface-100 dark:bg-surface-800"
    ]
  },
  filtercontainer: {
    class: "relative"
  },
  filterinput: {
    class: [
      // Font
      "font-sans",
      "leading-none",
      "sm:text-sm",
      // Sizing
      "py-1.5 px-3",
      "pr-7",
      "-mr-7",
      "w-full",
      //Color
      "text-surface-700 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-900",
      "placeholder:text-surface-400",
      // Shape
      "border-0",
      "rounded-tl-md",
      "rounded-tr-md",
      "appearance-none",
      // States
      "focus:ring-2 focus:ring-inset focus:outline-none focus:outline-offset-0",
      "focus:ring-primary-600 dark:focus:ring-primary-500",
      // Misc
      "appearance-none"
    ]
  },
  filtericon: {
    class: ["absolute", "top-1/2 right-3", "-mt-2"]
  },
  emptymessage: {
    class: [
      // Font
      "leading-none",
      "sm:text-sm",
      // Spacing
      "py-2 px-4",
      // Color
      "text-surface-800 dark:text-white/80",
      "bg-transparent"
    ]
  }
}, he = {
  root: ({ props: e }) => ({
    class: [
      "relative",
      // Flexbox
      "flex",
      // Spacing
      "min-h-[4rem]",
      // Shape
      "rounded-md",
      "shadow-md",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "ring-1 ring-inset ring-surface-100 dark:ring-surface-800 ring-offset-0",
      {
        "items-center px-2 sm:px-6": e.orientation == "horizontal",
        "flex-col justify-center sm:justify-start sm:w-48 px-2": e.orientation !== "horizontal"
      }
    ]
  }),
  menu: ({ props: e }) => ({
    class: [
      // Flexbox
      "sm:flex sm:row-gap-2 sm:col-gap-4",
      "items-center",
      "flex-wrap",
      "flex-col sm:flex-row",
      {
        hidden: !(e != null && e.mobileActive),
        flex: e == null ? void 0 : e.mobileActive
      },
      // Position
      "absolute sm:relative",
      "top-full left-0",
      "sm:top-auto sm:left-auto",
      // Size
      "w-full sm:w-auto",
      // Spacing
      "m-0 ",
      "py-2 px-1.5 sm:py-0 sm:p-0 sm:py-1.5",
      "list-none",
      // Shape
      "shadow-md sm:shadow-none",
      "border-0",
      "sm:rounded-none rounded-md",
      // Color
      "bg-surface-0 dark:bg-surface-900 sm:bg-transparent dark:sm:bg-transparent",
      // Misc
      "outline-none"
    ]
  }),
  menuitem: ({ props: e }) => ({
    class: [
      "sm:relative static",
      {
        "sm:w-auto w-full": e.horizontal,
        "w-full": !e.horizontal
      }
    ]
  }),
  content: ({ props: e, context: r }) => ({
    class: [
      // Shape
      {
        "rounded-md": e.level < 1
      },
      //  Colors
      {
        "text-surface-500 dark:text-white/70": !r.focused && !r.active,
        "text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-black/70": r.focused && !r.active,
        "text-surface-900 dark:text-surface-0/80 bg-surface-50 dark:bg-black/70": r.focused && r.active,
        "text-surface-900 dark:text-surface-0/80 bg-surface-50 dark:bg-black/70": !r.focused && r.active
      },
      // Hover States
      {
        "hover:bg-surface-50 dark:hover:bg-surface-800": !r.active,
        "hover:bg-surface-100 dark:hover:bg-black/40 text-surface-900 dark:text-surface-0/80": r.active
      },
      // Transitions
      "transition-all",
      "duration-200"
    ]
  }),
  action: {
    class: [
      "relative",
      // Font
      "sm:text-sm font-medium",
      // Flexbox
      "flex",
      "items-center",
      // Spacing
      "py-2",
      "px-3",
      "my-1 sm:my-0",
      // Misc
      "select-none",
      "cursor-pointer",
      "no-underline ",
      "overflow-hidden"
    ]
  },
  icon: {
    class: "mr-2"
  },
  submenuicon: ({ props: e }) => ({
    class: [
      {
        "ml-auto sm:ml-2": e.horizontal,
        "ml-auto": !e.horizontal
      }
    ]
  }),
  panel: ({ props: e }) => ({
    class: [
      // Size
      "w-auto",
      // Spacing
      "py-1",
      "m-0 mx-2",
      // Shape
      "shadow-none sm:shadow-md",
      "border-0",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      // Position
      "static sm:absolute",
      "z-10",
      {
        "sm:left-full top-0": !e.horizontal
      }
    ]
  }),
  grid: {
    class: "flex flex-wrap sm:flex-nowrap"
  },
  column: {
    class: "w-full sm:w-1/2"
  },
  submenu: {
    class: ["m-0 list-none", "py-1 px-2 w-full sm:min-w-[14rem]"]
  },
  submenuheader: {
    class: [
      "font-medium",
      "sm:text-md",
      // Spacing
      "py-2.5 px-2",
      "m-0",
      // Shape
      "border-b border-surface-200 dark:border-surface-700",
      // Color
      "text-surface-700 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-900"
    ]
  },
  separator: {
    class: "border-t border-surface-200 dark:border-surface-600 my-1"
  },
  menubutton: {
    class: [
      // Flexbox
      "flex sm:hidden",
      "items-center justify-center",
      // Size
      "w-8",
      "h-8",
      // Shape
      "rounded-full",
      // Color
      "text-surface-500 dark:text-white/80",
      // States
      "hover:text-surface-600 dark:hover:text-white/60",
      "hover:bg-surface-50 dark:hover:bg-surface-800/80",
      "focus:outline-none focus:outline-offset-0",
      "focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400",
      // Transitions
      "transition duration-200 ease-in-out",
      // Misc
      "cursor-pointer",
      "no-underline"
    ]
  },
  end: {
    class: "ml-auto self-center"
  }
}, ve = {
  root: {
    class: [
      // Sizing and Shape
      "rounded-md",
      // Colors
      "bg-white shadow-lg dark:bg-surface-700",
      "text-surface-700 dark:text-white/80",
      "ring-1 ring-surface-200 dark:ring-surface-700",
      // Hides the selection rectangle from overflowing the overall rounded corners
      "overflow-hidden"
    ]
  },
  menu: {
    class: [
      // Spacings and Shape
      "list-none",
      "m-0",
      "p-0",
      "outline-none"
    ]
  },
  menuitem: {
    class: ["first:border-t-0 border-t border-gray-b"]
  },
  content: ({ context: e }) => ({
    class: [
      // Colors
      {
        "text-black dark:text-surface-0": !e.focused,
        "bg-gray-200 text-black dark:bg-surface-300/10 dark:text-primary-400": e.focused
      },
      // Transitions
      "transition-shadow",
      "duration-200",
      // States
      "hover:text-black dark:hover:text-primary-400",
      "hover:bg-sky-200 dark:hover:bg-surface-400/10"
    ]
  }),
  action: {
    class: [
      "relative",
      // Font
      "font-medium",
      // Flexbox
      "flex",
      "items-center",
      // Spacing
      "px-2 py-1.5",
      // Misc
      "no-underline",
      "overflow-hidden",
      "cursor-pointer",
      "select-none"
    ]
  },
  icon: {
    class: [
      // Spacing
      "mr-2",
      "text-xs"
    ]
  },
  label: {
    class: ["text-xs"]
  },
  submenuheader: {
    class: [
      // Font
      "font-semibold",
      "text-xs leading-6",
      // Spacing
      "m-0 ",
      "py-1",
      "px-3",
      // Shape
      "rounded-tl-none",
      "rounded-tr-none",
      // Colors
      "bg-surface-0 dark:bg-surface-700",
      "text-surface-600 dark:text-surface-0/60"
    ]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, xe = {
  root: {
    class: [
      "relative",
      // Flexbox
      "flex",
      "items-center",
      "gap-6",
      // Spacing
      "px-6",
      "min-h-[4rem]",
      // Shape
      "rounded-md",
      "shadow-md",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "ring-1 ring-inset ring-surface-100 dark:ring-surface-800 ring-offset-0"
    ]
  },
  menu: ({ props: e }) => ({
    class: [
      // Flexbox
      "sm:flex sm:row-gap-2 sm:col-gap-4",
      "items-center",
      "flex-wrap",
      "flex-col sm:flex-row",
      {
        hidden: !(e != null && e.mobileActive),
        flex: e == null ? void 0 : e.mobileActive
      },
      // Position
      "absolute sm:relative",
      "top-full left-0",
      "sm:top-auto sm:left-auto",
      // Size
      "w-full sm:w-auto",
      // Spacing
      "m-0 ",
      "py-2 px-1.5 sm:py-0 sm:p-0 sm:py-1.5",
      "list-none",
      // Shape
      "shadow-md sm:shadow-none",
      "border-0",
      "sm:rounded-none rounded-md",
      // Color
      "bg-surface-0 dark:bg-surface-900 sm:bg-transparent dark:sm:bg-transparent",
      // Misc
      "outline-none"
    ]
  }),
  menuitem: {
    class: "sm:relative sm:w-auto w-full static"
  },
  content: ({ props: e, context: r }) => ({
    class: [
      // Shape
      {
        "rounded-md": e.root
      },
      //  Colors
      {
        "text-surface-500 dark:text-white/70": !r.focused && !r.active,
        "text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-black/70": r.focused && !r.active,
        "text-surface-900 dark:text-surface-0/80 bg-surface-50 dark:bg-black/70": r.focused && r.active,
        "text-surface-900 dark:text-surface-0/80 bg-surface-50 dark:bg-black/70": !r.focused && r.active
      },
      // Hover States
      {
        "hover:bg-surface-50 dark:hover:bg-surface-800": !r.active,
        "hover:bg-surface-100 dark:hover:bg-black/40 text-surface-900 dark:text-surface-0/80": r.active
      },
      // Transitions
      "transition-all",
      "duration-200"
    ]
  }),
  action: ({ context: e }) => ({
    class: [
      "relative",
      // Font
      "sm:text-sm font-medium",
      // Flexbox
      "flex",
      "items-center",
      // Spacing
      "py-2",
      "px-3",
      "my-1 sm:my-0",
      // Size
      {
        "pl-5 sm:pl-3": e.level === 1,
        "pl-7 sm:pl-3": e.level === 2
      },
      // Misc
      "select-none",
      "cursor-pointer",
      "no-underline ",
      "overflow-hidden"
    ]
  }),
  icon: {
    class: "mr-2"
  },
  submenuicon: ({ props: e }) => ({
    class: [
      {
        "ml-auto sm:ml-2": e.root,
        "ml-auto": !e.root
      }
    ]
  }),
  submenu: ({ props: e }) => ({
    class: [
      // Size
      "w-full sm:w-48",
      // Spacing
      "py-1",
      "m-0 ",
      "list-none",
      // Shape
      "shadow-none sm:shadow-md",
      "border-0",
      // Position
      "static sm:absolute",
      "z-10",
      {
        "sm:absolute sm:left-full sm:top-0": e.level > 1
      },
      // Color
      "bg-surface-0 dark:bg-surface-900"
    ]
  }),
  separator: {
    class: "border-t border-surface-200 dark:border-surface-600 my-1"
  },
  button: {
    class: [
      // Flexbox
      "flex sm:hidden",
      "items-center justify-center",
      // Size
      "w-8",
      "h-8",
      // Shape
      "rounded-full",
      // Color
      "text-surface-500 dark:text-white/80",
      // States
      "hover:text-surface-600 dark:hover:text-white/60",
      "hover:bg-surface-50 dark:hover:bg-surface-800/80",
      "focus:outline-none focus:outline-offset-0",
      "focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400",
      // Transitions
      "transition duration-200 ease-in-out",
      // Misc
      "cursor-pointer",
      "no-underline"
    ]
  },
  end: {
    class: "ml-auto self-center"
  }
}, ke = {
  root: ({ props: e }) => ({
    class: [
      // Spacing and Shape
      "my-2 mx-0",
      "rounded-md",
      "ring-1 ring-inset ring-surface-200 dark:ring-surface-700 ring-offset-0",
      // Colors
      "bg-surface-0 dark:bg-surface-800",
      {
        "text-blue-500 dark:text-blue-300": e.severity == "info",
        "text-green-500 dark:text-green-300": e.severity == "success",
        "text-orange-500 dark:text-orange-300": e.severity == "warn",
        "text-red-500 dark:text-red-300": e.severity == "error"
      }
    ]
  }),
  wrapper: {
    class: [
      // Flexbox
      "flex items-center",
      // Spacing
      "p-4"
    ]
  },
  icon: {
    class: [
      // Sizing and Spacing
      "w-5 h-5",
      "mr-3 shrink-0"
    ]
  },
  text: {
    class: [
      // Font and Text
      "text-sm leading-none",
      "font-medium"
    ]
  },
  button: ({ props: e }) => ({
    class: [
      // Flexbox
      "flex items-center justify-center",
      // Size
      "w-6 h-6",
      // Spacing and Misc
      "ml-auto relative",
      // Shape
      "rounded-full",
      // Colors
      "bg-transparent",
      "text-surface-700 dark:text-surface-0/80",
      // Transitions
      "transition duration-200 ease-in-out",
      // States
      "hover:bg-surface-100 dark:hover:bg-surface-700",
      "outline-none focus:ring-1 focus:ring-inset",
      "focus:ring-primary-500 dark:focus:ring-primary-400",
      // Misc
      "overflow-hidden"
    ]
  }),
  closeicon: {
    class: [
      // Sizing and Spacing
      "w-3 h-3",
      "shrink-0"
    ]
  },
  transition: {
    enterFromClass: "opacity-0",
    enterActiveClass: "transition-opacity duration-300",
    leaveFromClass: "max-h-40",
    leaveActiveClass: "overflow-hidden transition-all duration-300 ease-in",
    leaveToClass: "max-h-0 opacity-0 !m-0"
  }
}, we = {
  root: ({ props: e, state: r }) => ({
    class: [
      // Display and Position
      "inline-flex",
      "relative",
      // Shape
      "w-full md:max-w-[20rem]",
      "rounded-md",
      "shadow-sm",
      // Color and Background
      "bg-surface-0 dark:bg-surface-900",
      // States
      {
        "ring-1 ring-inset ring-surface-300 dark:ring-surface-700": !r.focused,
        "ring-2 ring-inset ring-primary-500 dark:ring-primary-400": r.focused
      },
      // Misc
      "cursor-default",
      "select-none",
      {
        "opacity-60": e.disabled,
        "pointer-events-none": e.disabled
      }
    ]
  }),
  labelContainer: {
    class: "overflow-hidden flex flex-auto cursor-pointer"
  },
  label: ({ props: e }) => {
    var r;
    return {
      class: [
        "block leading-5",
        e.display === "chip" && ((r = e == null ? void 0 : e.modelValue) == null ? void 0 : r.length) > 0 ? "py-1 px-3" : "py-1.5 px-3",
        // Color
        {
          "text-surface-800 dark:text-white/80": e.modelValue,
          "text-surface-400 dark:text-surface-500": !e.modelValue
        },
        "placeholder:text-surface-400 dark:placeholder:text-surface-500",
        // Transitions
        "transition duration-200",
        // Misc
        "overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis"
      ]
    };
  },
  token: {
    class: [
      // Flexbox
      "inline-flex items-center",
      // Spacing
      "py-0.5 px-3 mr-2",
      // Shape
      "rounded-[1.14rem]",
      // Colors
      "text-surface-700 dark:text-white/70",
      "bg-surface-200 dark:bg-surface-700"
    ]
  },
  removeTokenIcon: {
    class: [
      // Shape
      "rounded-md leading-6",
      // Spacing
      "ml-2",
      // Size
      "w-4 h-4",
      // Transition
      "transition duration-200 ease-in-out",
      // Misc
      "cursor-pointer"
    ]
  },
  trigger: {
    class: [
      //Font
      "sm:text-sm",
      // Flexbox
      "flex items-center justify-center",
      "shrink-0",
      // Color and Background
      "bg-transparent",
      "text-surface-500",
      // Size
      "w-12",
      // Shape
      "rounded-tr-md",
      "rounded-br-md"
    ]
  },
  panel: {
    class: [
      // Position
      "absolute top-0 left-0",
      "mt-2",
      // Shape
      "border-0",
      "rounded-md",
      "shadow-md",
      // Color
      "bg-surface-0 dark:bg-surface-800",
      "text-surface-800 dark:text-white/80",
      "ring-1 ring-inset ring-surface-300 dark:ring-surface-700"
    ]
  },
  header: {
    class: [
      "flex items-center justify-between",
      // Spacing
      "py-2 px-4",
      "m-0",
      //Shape
      "border-b",
      "rounded-tl-md",
      "rounded-tr-md",
      // Color
      "text-surface-700 dark:text-white/80",
      "bg-surface-50 dark:bg-surface-800",
      "border-surface-200 dark:border-surface-700"
    ]
  },
  headerCheckboxContainer: {
    class: [
      "relative",
      // Alignment
      "inline-flex",
      "align-bottom",
      // Size
      "w-4",
      "h-4",
      // Spacing
      "mr-2",
      // Misc
      "cursor-default",
      "select-none"
    ]
  },
  headerCheckbox: ({ context: e, state: r }) => ({
    class: [
      // Alignment
      "flex",
      "items-center",
      "justify-center",
      // Size
      "w-4",
      "h-4",
      // Shape
      "rounded",
      "border",
      // Colors
      "text-surface-600",
      {
        "border-surface-300 bg-surface-0 dark:border-surface-700 dark:bg-surface-900": !(e != null && e.selected),
        "border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400": e == null ? void 0 : e.selected
      },
      {
        "outline-offset-0 ring-1 ring-primary-500 dark:ring-primary-400": r.focused
      }
    ]
  }),
  headercheckboxicon: {
    class: [
      // Font
      "text-normal",
      // Size
      "w-3",
      "h-3",
      // Colors
      "text-white dark:text-surface-900",
      // Transitions
      "transition-all",
      "duration-200"
    ]
  },
  closeButton: {
    class: [
      "relative",
      // Flexbox and Alignment
      "flex items-center justify-center",
      // Size and Spacing
      "mr-2",
      "last:mr-0",
      "w-6 h-6",
      // Shape
      "border-0",
      "rounded-full",
      // Colors
      "text-surface-500",
      "bg-transparent",
      // Transitions
      "transition duration-200 ease-in-out",
      // States
      "hover:text-surface-700 dark:hover:text-white/80",
      "hover:bg-surface-100 dark:hover:bg-surface-800/80",
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-inset",
      "focus:ring-primary-500 dark:focus:ring-primary-400",
      // Misc
      "overflow-hidden"
    ]
  },
  closeButtonIcon: {
    class: [
      // Display
      "inline-block",
      // Size
      "w-3",
      "h-3"
    ]
  },
  wrapper: {
    class: [
      // Sizing
      "max-h-[15rem]",
      // Misc
      "overflow-auto"
    ]
  },
  list: {
    class: "py-1 list-none m-0"
  },
  item: ({ context: e }) => ({
    class: [
      // Font
      "sm:text-sm",
      "leading-none",
      {
        "font-normal": !e.selected,
        "font-bold": e.selected
      },
      // Flexbox
      "flex items-center",
      // Position
      "relative",
      // Shape
      "border-0",
      "rounded-none",
      // Spacing
      "m-0",
      "py-2 px-4",
      // Color
      {
        "text-surface-700 dark:text-white/80": !e.focused && !e.selected
      },
      {
        "bg-surface-200 dark:bg-surface-600/60 text-surface-700 dark:text-white/80": e.focused && !e.selected
      },
      {
        "bg-primary-500 dark:bg-primary-400 text-white dark:text-surface-700": e.focused && e.selected
      },
      {
        "bg-transparent text-surface-700 dark:text-white/80": !e.focused && e.selected
      },
      //States
      "hover:bg-primary-500 dark:hover:bg-primary-400 hover:text-white dark:hover:text-surface-700",
      // Misc
      "cursor-pointer",
      "overflow-hidden",
      "whitespace-nowrap"
    ]
  }),
  checkboxContainer: {
    class: [
      "relative",
      // Alignment
      "inline-flex",
      "align-bottom",
      // Size
      "w-4",
      "h-4",
      // Spacing
      "mr-2",
      // Misc
      "cursor-default",
      "select-none"
    ]
  },
  checkbox: ({ context: e }) => ({
    class: [
      // Alignment
      "flex",
      "items-center",
      "justify-center",
      // Size
      "w-4",
      "h-4",
      // Shape
      "rounded",
      "border",
      // Colors
      "text-surface-600",
      {
        "border-surface-300 bg-surface-0 dark:border-surface-700 dark:bg-surface-900": !(e != null && e.selected),
        "border-primary-400 bg-primary-500 dark:border-primary-300 dark:bg-primary-400": e == null ? void 0 : e.selected
      },
      "focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400"
    ]
  }),
  checkboxicon: {
    class: [
      // Font
      "text-normal",
      // Size
      "w-3",
      "h-3",
      // Colors
      "text-white dark:text-surface-900",
      // Transitions
      "transition-all",
      "duration-200"
    ]
  },
  itemgroup: {
    class: [
      //Font
      "font-bold",
      "sm:text-sm",
      // Spacing
      "m-0",
      "py-2 px-4",
      // Color
      "text-surface-800 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-600/80",
      // Misc
      "cursor-auto"
    ]
  },
  filtercontainer: {
    class: "relative w-full mr-2"
  },
  filterinput: {
    class: [
      // Font
      "font-sans",
      "leading-none",
      "sm:text-sm",
      // Sizing
      "py-1.5 px-3",
      "pr-7",
      "-mr-7",
      "w-full",
      //Color
      "text-surface-700 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-900",
      "placeholder:text-surface-400",
      "ring-1 ring-inset ring-surface-300 dark:ring-surface-700",
      // Shape
      "border-0",
      "rounded-md",
      "appearance-none",
      // States
      "focus:ring-2 focus:ring-inset focus:outline-none focus:outline-offset-0",
      "focus:ring-primary-600 dark:focus:ring-primary-500",
      // Misc
      "appearance-none"
    ]
  },
  filtericon: {
    class: ["absolute", "top-1/2 right-3", "-mt-2"]
  },
  clearicon: {
    class: [
      // Color
      "text-surface-500",
      // Position
      "absolute",
      "top-1/2",
      "right-12",
      // Spacing
      "-mt-2"
    ]
  },
  emptymessage: {
    class: [
      // Font
      "leading-none",
      "sm:text-sm",
      // Spacing
      "py-2 px-4",
      // Color
      "text-surface-800 dark:text-white/80",
      "bg-transparent"
    ]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, ze = {
  root: {
    class: [
      // Flexbox
      "flex"
    ]
  },
  controls: {
    class: [
      // Flexbox & Alignment
      "flex flex-col justify-center gap-2",
      // Spacing
      "p-3"
    ]
  },
  moveupbutton: {
    root: ({ context: e }) => ({
      class: [
        // Flexbox & Alignment
        "relative inline-flex items-center justify-center",
        // Shape
        "rounded-md",
        // Color
        "text-white dark:text-surface-900",
        "bg-primary-500 dark:bg-primary-400",
        "border border-primary-500 dark:border-primary-400",
        // Spacing & Size
        "text-sm",
        "w-8",
        "m-0",
        "px-2.5 py-1.5 min-w-[2rem]",
        "shadow-sm",
        // Transitions
        "transition duration-200 ease-in-out",
        // State
        "hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300",
        "focus:outline-none focus:outline-offset-0 focus:ring-2",
        "focus:ring-primary-500 dark:focus:ring-primary-400",
        {
          "cursor-default pointer-events-none opacity-60": e.disabled
        },
        // Interactivity
        "cursor-pointer user-select-none"
      ]
    }),
    label: {
      class: [
        // Flexbox
        "flex-initial",
        // Size
        "w-0"
      ]
    }
  },
  movedownbutton: {
    root: ({ context: e }) => ({
      class: [
        // Flexbox & Alignment
        "relative inline-flex items-center justify-center",
        // Shape
        "rounded-md",
        // Color
        "text-white dark:text-surface-900",
        "bg-primary-500 dark:bg-primary-400",
        "border border-primary-500 dark:border-primary-400",
        // Spacing & Size
        "text-sm",
        "w-8",
        "m-0",
        "px-2.5 py-1.5 min-w-[2rem]",
        "shadow-sm",
        // Transitions
        "transition duration-200 ease-in-out",
        // State
        "hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300",
        "focus:outline-none focus:outline-offset-0 focus:ring-2",
        "focus:ring-primary-500 dark:focus:ring-primary-400",
        {
          "cursor-default pointer-events-none opacity-60": e.disabled
        },
        // Interactivity
        "cursor-pointer user-select-none"
      ]
    }),
    label: {
      class: [
        // Flexbox
        "flex-initial",
        // Size
        "w-0"
      ]
    }
  },
  movetopbutton: {
    root: ({ context: e }) => ({
      class: [
        // Flexbox & Alignment
        "relative inline-flex items-center justify-center",
        // Shape
        "rounded-md",
        // Color
        "text-white dark:text-surface-900",
        "bg-primary-500 dark:bg-primary-400",
        "border border-primary-500 dark:border-primary-400",
        // Spacing & Size
        "text-sm",
        "w-8",
        "m-0",
        "px-2.5 py-1.5 min-w-[2rem]",
        "shadow-sm",
        // Transitions
        "transition duration-200 ease-in-out",
        // State
        "hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300",
        "focus:outline-none focus:outline-offset-0 focus:ring-2",
        "focus:ring-primary-500 dark:focus:ring-primary-400",
        {
          "cursor-default pointer-events-none opacity-60": e.disabled
        },
        // Interactivity
        "cursor-pointer user-select-none"
      ]
    }),
    label: {
      class: [
        // Flexbox
        "flex-initial",
        // Size
        "w-0"
      ]
    }
  },
  movebottombutton: {
    root: ({ context: e }) => ({
      class: [
        // Flexbox & Alignment
        "relative inline-flex items-center justify-center",
        // Shape
        "rounded-md",
        // Color
        "text-white dark:text-surface-900",
        "bg-primary-500 dark:bg-primary-400",
        "border border-primary-500 dark:border-primary-400",
        // Spacing & Size
        "text-sm",
        "w-8",
        "m-0",
        "px-2.5 py-1.5 min-w-[2rem]",
        "shadow-sm",
        // Transitions
        "transition duration-200 ease-in-out",
        // State
        "hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300",
        "focus:outline-none focus:outline-offset-0 focus:ring-2",
        "focus:ring-primary-500 dark:focus:ring-primary-400",
        {
          "cursor-default pointer-events-none opacity-60": e.disabled
        },
        // Interactivity
        "cursor-pointer user-select-none"
      ]
    }),
    label: {
      class: [
        // Flexbox
        "flex-initial",
        // Size
        "w-0"
      ]
    }
  },
  container: {
    class: ["flex-auto"]
  },
  header: {
    class: [
      "font-semibold",
      // Shape
      "border-b rounded-t-md",
      // Spacing
      "py-3.5 px-3",
      // Color
      "text-surface-800 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-800",
      "border-surface-200 dark:border-surface-700 border-b"
    ]
  },
  list: {
    class: [
      // Spacing
      "list-none m-0 p-0",
      // Size
      "min-h-[12rem] max-h-[24rem]",
      // Shape
      "rounded-b-md border-0",
      // Color
      "text-surface-600 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-800",
      "border border-surface-200 dark:border-surface-700",
      // Spacing
      "py-3 px-0",
      // Focus & Outline
      "outline-none",
      // Misc
      "overflow-auto"
    ]
  },
  item: ({ context: e }) => ({
    class: [
      // Position
      "relative",
      // Spacing
      "py-3.5 px-3 m-0",
      // Shape
      "border-b last:border-b-0",
      // Transition
      "transition duration-200",
      // Color
      "text-surface-700 dark:text-white/80",
      "border-surface-200 dark:border-surface-700",
      {
        "bg-surface-100 dark:bg-surface-600/30": e.active && !e.focused
      },
      {
        "bg-surface-200 dark:bg-surface-500/30": e.active && e.focused
      },
      {
        "bg-surface-50 dark:bg-surface-700/70": !e.active && e.focused
      },
      // State
      "hover:bg-surface-100 dark:hover:bg-surface-700",
      // Misc
      "cursor-pointer overflow-hidden"
    ]
  })
}, Ce = {
  table: {
    class: [
      // Spacing & Position
      "mx-auto my-0",
      // Table Style
      "border-spacing-0 border-separate"
    ]
  },
  cell: {
    class: [
      // Alignment
      "text-center align-top",
      // Spacing
      "py-0 px-3"
    ]
  },
  node: ({ context: e }) => ({
    class: [
      "relative inline-block",
      // Font
      "text-sm leading-none",
      // Spacing
      "px-5 py-3",
      // Shape
      "border",
      "rounded",
      // Color
      "border-surface-200 dark:border-surface-700",
      {
        "text-surface-600 dark:text-white/80": !(e != null && e.selected),
        "bg-surface-0 dark:bg-surface-800": !(e != null && e.selected),
        "text-surface-700 dark:text-surface-0": e == null ? void 0 : e.selected,
        "bg-surface-50 dark:bg-surface-700": e == null ? void 0 : e.selected
      },
      // States
      {
        "hover:bg-surface-100 dark:hover:bg-surface-600/40": e == null ? void 0 : e.selectable
      },
      {
        "cursor-pointer": e == null ? void 0 : e.selectable
      }
    ]
  }),
  linecell: {
    class: [
      // Alignment
      "text-center align-top",
      // Spacing
      "py-0 px-3"
    ]
  },
  linedown: {
    class: [
      // Spacing
      "mx-auto my-0",
      // Size
      "w-px h-[20px]",
      // Color
      "bg-surface-200 dark:bg-surface-700"
    ]
  },
  lineleft: ({ context: e }) => ({
    class: [
      // Alignment
      "text-center align-top",
      // Spacing
      "py-0 px-3",
      // Shape
      "rounded-none border-r",
      {
        "border-t": e.lineTop
      },
      // Color
      "border-surface-200 dark:border-surface-700"
    ]
  }),
  lineright: ({ context: e }) => ({
    class: [
      // Alignment
      "text-center align-top",
      // Spacing
      "py-0 px-3",
      // Shape
      "rounded-none",
      // Color
      {
        "border-t border-surface-200 dark:border-surface-700": e.lineTop
      }
    ]
  }),
  nodecell: {
    class: "text-center align-top py-0 px-3"
  },
  nodetoggler: {
    class: [
      // Position
      "absolute bottom-[-0.75rem] left-2/4 -ml-3",
      "z-20",
      // Flexbox
      "flex items-center justify-center",
      // Size
      "w-6 h-6",
      // Shape
      "rounded-full",
      // Color
      "bg-inherit text-inherit",
      // Focus
      "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400",
      // Misc
      "cursor-pointer no-underline select-none"
    ]
  },
  nodetogglericon: {
    class: [
      // Position
      "relative inline-block",
      // Size
      "w-4 h-4"
    ]
  }
}, je = {
  root: {
    class: [
      // Shape
      "rounded-lg",
      "shadow-xl",
      "border-0 dark:border",
      // Position
      "absolute left-0 top-0 mt-2",
      "z-40 transform origin-center",
      // Color
      "bg-surface-0 dark:bg-surface-800",
      "text-surface-700 dark:text-surface-0/80",
      "dark:border-surface-700",
      // Before: Triangle
      "before:absolute before:-top-2 before:ml-4 before:z-50",
      "before:w-0 before:h-0 before:shadow-xl",
      "before:border-transparent before:border-solid",
      "before:border-x-[0.5rem] before:border-b-[0.5rem]",
      "before:border-t-0 before:border-b-surface-0 dark:before:border-b-surface-800"
    ]
  },
  content: {
    class: "p-6 items-center flex"
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, Te = {
  root: {
    class: [
      // Flex & Alignment
      "flex items-center justify-center flex-wrap",
      // Spacing
      "px-4",
      // Shape
      "border-t",
      // Color
      "bg-surface-0 dark:bg-surface-800",
      "text-surface-500 dark:text-white/60",
      "border-surface-200 dark:border-surface-700"
    ]
  },
  paginatorwrapper: {
    class: "mt-[-1px]"
  },
  firstpagebutton: ({ context: e }) => ({
    class: [
      "relative",
      // Font
      "text-sm font-medium",
      // Flex & Alignment
      "inline-flex items-center justify-center",
      // Shape
      "border-t-2 border-transparent",
      // Size
      "min-w-[3rem] h-12 mt-[-1px]",
      // Color
      "text-surface-500 dark:text-white/60",
      // State
      {
        "hover:border-surface-300 dark:hover:border-surface-200/30": !e.disabled,
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400": !e.disabled
      },
      // Transition
      "transition duration-200",
      // Misc
      "user-none overflow-hidden",
      {
        "cursor-default pointer-events-none opacity-60": e.disabled
      }
    ]
  }),
  previouspagebutton: ({ context: e }) => ({
    class: [
      "relative",
      // Font
      "text-sm font-medium",
      // Flex & Alignment
      "inline-flex items-center justify-center",
      // Shape
      "border-t-2 border-transparent",
      // Size
      "min-w-[3rem] h-12 mt-[-1px]",
      // Color
      "text-surface-500 dark:text-white/60",
      // State
      {
        "hover:border-surface-300 dark:hover:border-surface-200/30": !e.disabled,
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400": !e.disabled
      },
      // Transition
      "transition duration-200",
      // Misc
      "user-none overflow-hidden",
      {
        "cursor-default pointer-events-none opacity-60": e.disabled
      }
    ]
  }),
  nextpagebutton: ({ context: e }) => ({
    class: [
      "relative",
      // Font
      "text-sm font-medium",
      // Flex & Alignment
      "inline-flex items-center justify-center",
      // Shape
      "border-t-2 border-transparent",
      // Size
      "min-w-[3rem] h-12 mt-[-1px]",
      // Color
      "text-surface-500 dark:text-white/60",
      // State
      {
        "hover:border-surface-300 dark:hover:border-surface-200/30": !e.disabled,
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400": !e.disabled
      },
      // Transition
      "transition duration-200",
      // Misc
      "user-none overflow-hidden",
      {
        "cursor-default pointer-events-none opacity-60": e.disabled
      }
    ]
  }),
  lastpagebutton: ({ context: e }) => ({
    class: [
      "relative",
      // Font
      "text-sm font-medium",
      // Flex & Alignment
      "inline-flex items-center justify-center",
      // Shape
      "border-t-2 border-transparent",
      // Size
      "min-w-[3rem] h-12 mt-[-1px]",
      // Color
      "text-surface-500 dark:text-white/60",
      // State
      {
        "hover:border-surface-300 dark:hover:border-surface-200/30": !e.disabled,
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400": !e.disabled
      },
      // Transition
      "transition duration-200",
      // Misc
      "user-none overflow-hidden",
      {
        "cursor-default pointer-events-none opacity-60": e.disabled
      }
    ]
  }),
  pagebutton: ({ context: e }) => ({
    class: [
      "relative",
      // Font
      "text-sm font-medium",
      // Flex & Alignment
      "inline-flex items-center justify-center",
      // Shape
      "border-t-2",
      // Size
      "min-w-[3rem] h-12 mt-[-1px]",
      // Color
      {
        "text-surface-500 dark:text-white/60 border-transparent": !e.active,
        "border-primary-500 dark:border-primary-400 text-primary-500 dark:text-surface-0": e.active
      },
      // State
      {
        "hover:border-surface-300 dark:hover:border-surface-200/30": !e.disabled && !e.active,
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400": !e.disabled
      },
      // Transition
      "transition duration-200",
      // Misc
      "user-none overflow-hidden",
      {
        "cursor-default pointer-events-none opacity-60": e.disabled
      }
    ]
  }),
  rowperpagedropdown: {
    root: ({ props: e, state: r }) => ({
      class: [
        // Display and Position
        "inline-flex",
        "relative",
        // Shape
        "h-8",
        "rounded-md",
        // Spacing
        "mx-2",
        // Color and Background
        "bg-transparent",
        // Transitions
        "transition-all",
        "duration-200",
        // States
        {
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 dark:focus-visible:ring-primary-500": !r.focused
        },
        // Misc
        "cursor-pointer",
        "select-none",
        {
          "opacity-60": e.disabled,
          "pointer-events-none": e.disabled,
          "cursor-default": e.disabled
        }
      ]
    }),
    input: {
      class: [
        //Font
        "font-sans",
        "leading-6",
        "sm:text-sm",
        // Display
        "block",
        "flex-auto",
        "flex items-center",
        // Color and Background
        "bg-transparent",
        "border-0",
        "text-surface-800 dark:text-white/80",
        // Sizing and Spacing
        "w-[1%]",
        "py-1.5 px-3 pr-0",
        //Shape
        "rounded-none",
        // Transitions
        "transition",
        "duration-200",
        // States
        "focus-visible:outline-none focus-visible:shadow-none",
        // Misc
        "relative",
        "cursor-pointer",
        "overflow-hidden overflow-ellipsis",
        "whitespace-nowrap",
        "appearance-none"
      ]
    },
    trigger: {
      class: [
        //Font
        "sm:text-sm",
        // Flexbox
        "flex items-center justify-center",
        "shrink-0",
        // Color and Background
        "bg-transparent",
        "text-surface-500",
        // Size
        "w-12",
        "h-8",
        // Shape
        "rounded-tr-md",
        "rounded-br-md"
      ]
    },
    dropdownicon: {
      class: ""
    },
    panel: {
      class: [
        // Position
        "absolute top-0 left-0",
        "mt-1",
        // Shape
        "border-0",
        "rounded-md",
        "shadow-md",
        // Color
        "bg-surface-0 dark:bg-surface-800",
        "text-surface-800 dark:text-white/80",
        "ring-1 ring-inset ring-surface-300 dark:ring-surface-700"
      ]
    },
    wrapper: {
      class: [
        // Sizing
        "max-h-[15rem]",
        // Misc
        "overflow-auto"
      ]
    },
    list: {
      class: "py-1 list-none m-0"
    },
    item: ({ context: e }) => ({
      class: [
        // Font
        "sm:text-sm",
        "leading-none",
        {
          "font-normal": !e.selected,
          "font-bold": e.selected
        },
        // Position
        "relative",
        // Shape
        "border-0",
        "rounded-none",
        // Spacing
        "m-0",
        "py-2 px-4",
        // Color
        {
          "text-surface-700 dark:text-white/80": !e.focused && !e.selected
        },
        {
          "bg-primary-500 dark:bg-primary-400 text-white dark:text-surface-700": e.focused && e.selected
        },
        {
          "bg-transparent text-surface-700 dark:text-white/80": !e.focused && e.selected
        },
        //States
        "hover:bg-primary-500 dark:hover:bg-primary-400 hover:text-white dark:hover:text-surface-700",
        // Misc
        "cursor-pointer",
        "overflow-hidden",
        "whitespace-nowrap"
      ]
    })
  },
  jumptopageinput: {
    root: {
      class: "inline-flex mx-2"
    },
    input: {
      root: {
        class: [
          "relative",
          //Font
          "font-sans",
          "leading-6",
          "sm:text-sm",
          // Display
          "block",
          "flex-auto",
          // Color and Background
          "bg-transparent",
          "border-0",
          "text-surface-800 dark:text-white/80",
          "ring-1 ring-inset ring-surface-300 dark:ring-surface-700",
          // Sizing and Spacing
          "w-[1%] max-w-[3rem]",
          "py-1.5 px-3",
          //Shape
          "rounded-md",
          // Transitions
          "transition",
          "duration-200",
          // States
          "hover:border-primary-500 dark:hover:border-primary-400",
          "focus-visible:outline-none focus-visible:shadow-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-600 dark:focus-visible:ring-primary-500",
          // Misc
          "cursor-pointer",
          "overflow-hidden overflow-ellipsis",
          "whitespace-nowrap",
          "appearance-none"
        ]
      }
    }
  },
  jumptopagedropdown: {
    root: ({ props: e, state: r }) => ({
      class: [
        // Display and Position
        "inline-flex",
        "relative",
        // Shape
        "h-8",
        "rounded-md",
        // Spacing
        "mx-2",
        // Color and Background
        "bg-transparent",
        // Transitions
        "transition-all",
        "duration-200",
        // States
        {
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 dark:focus-visible:ring-primary-500": !r.focused
        },
        // Misc
        "cursor-pointer",
        "select-none",
        {
          "opacity-60": e.disabled,
          "pointer-events-none": e.disabled,
          "cursor-default": e.disabled
        }
      ]
    }),
    input: {
      class: [
        //Font
        "font-sans",
        "leading-6",
        "sm:text-sm",
        // Display
        "block",
        "flex-auto",
        "flex items-center",
        // Color and Background
        "bg-transparent",
        "border-0",
        "text-surface-800 dark:text-white/80",
        // Sizing and Spacing
        "w-[1%]",
        "py-1.5 px-3 pr-0",
        //Shape
        "rounded-none",
        // Transitions
        "transition",
        "duration-200",
        // States
        "focus-visible:outline-none focus-visible:shadow-none",
        // Misc
        "relative",
        "cursor-pointer",
        "overflow-hidden overflow-ellipsis",
        "whitespace-nowrap",
        "appearance-none"
      ]
    },
    trigger: {
      class: [
        //Font
        "sm:text-sm",
        // Flexbox
        "flex items-center justify-center",
        "shrink-0",
        // Color and Background
        "bg-transparent",
        "text-surface-500",
        // Size
        "w-12",
        "h-8",
        // Shape
        "rounded-tr-md",
        "rounded-br-md"
      ]
    },
    panel: {
      class: [
        // Position
        "absolute top-0 left-0",
        "mt-1",
        // Shape
        "border-0",
        "rounded-md",
        "shadow-md",
        // Color
        "bg-surface-0 dark:bg-surface-800",
        "text-surface-800 dark:text-white/80",
        "ring-1 ring-inset ring-surface-300 dark:ring-surface-700"
      ]
    },
    wrapper: {
      class: [
        // Sizing
        "max-h-[15rem]",
        // Misc
        "overflow-auto"
      ]
    },
    list: {
      class: "py-1 list-none m-0"
    },
    item: ({ context: e }) => ({
      class: [
        // Font
        "sm:text-sm",
        "leading-none",
        {
          "font-normal": !e.selected,
          "font-bold": e.selected
        },
        // Position
        "relative",
        // Shape
        "border-0",
        "rounded-none",
        // Spacing
        "m-0",
        "py-2 px-4",
        // Color
        {
          "text-surface-700 dark:text-white/80": !e.focused && !e.selected
        },
        {
          "bg-primary-500 dark:bg-primary-400 text-white dark:text-surface-700": e.focused && e.selected
        },
        {
          "bg-transparent text-surface-700 dark:text-white/80": !e.focused && e.selected
        },
        //States
        "hover:bg-primary-500 dark:hover:bg-primary-400 hover:text-white dark:hover:text-surface-700",
        // Misc
        "cursor-pointer",
        "overflow-hidden",
        "whitespace-nowrap"
      ]
    })
  }
}, Ae = {
  root: {
    class: "shadow-md rounded-lg"
  },
  header: ({ props: e }) => ({
    class: [
      // Alignments
      "flex items-center justify-between",
      // Colors
      "text-surface-700 dark:text-surface-0/80",
      "bg-surface-0 dark:bg-surface-900",
      "border-b border-surface-200 dark:border-surface-800",
      //Shape
      "rounded-tl-lg rounded-tr-lg",
      // Conditional Spacing
      {
        "px-5 md:px-6 py-5": !e.toggleable,
        "py-3 px-5 md:px-6": e.toggleable
      }
    ]
  }),
  title: {
    class: "leading-none font-medium"
  },
  toggler: {
    class: [
      // Alignments
      "inline-flex items-center justify-center",
      // Sized
      "w-8 h-8",
      //Shape
      "border-0 rounded-full",
      //Color
      "bg-transparent",
      "text-surface-600 dark:text-surface-100/80",
      // States
      "hover:text-surface-900 dark:hover:text-surface-0/80",
      "hover:bg-surface-50 dark:hover:bg-surface-800/50",
      "focus:outline-none focus:outline-offset-0 focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-inset dark:focus-visible:ring-primary-500",
      // Transitions
      "transition duration-200 ease-in-out",
      // Misc
      "overflow-hidden relative no-underline"
    ]
  },
  togglerIcon: {
    class: "inline-block"
  },
  content: {
    class: [
      // Spacing
      "py-6 px-5 md:px-6",
      // Shape
      "last:rounded-br-lg last:rounded-bl-lg",
      //Color
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-surface-0/80"
    ]
  },
  footer: {
    class: [
      // Spacing
      "py-6 px-5 md:px-6",
      //Shape
      "rounded-bl-lg rounded-br-lg",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-600 dark:text-surface-0/70",
      "border-t border-surface-200 dark:border-surface-800"
    ]
  },
  transition: {
    enterFromClass: "max-h-0",
    enterActiveClass: "overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",
    enterToClass: "max-h-[1000px]",
    leaveFromClass: "max-h-[1000px]",
    leaveActiveClass: "overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]",
    leaveToClass: "max-h-0"
  }
}, Ie = {
  panel: {
    class: "mb-1"
  },
  header: {
    class: ["rounded-md", "outline-none", "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50"]
  },
  headercontent: ({ context: e, instance: r }) => {
    var t, a;
    return {
      class: [
        // Shape
        "rounded-t-md",
        {
          "rounded-br-md rounded-bl-md": !e.active || ((t = r.activeItem) == null ? void 0 : t.items) === void 0,
          "rounded-br-0 rounded-bl-0": e.active && ((a = r.activeItem) == null ? void 0 : a.items) !== void 0
        },
        // Color
        "border border-surface-200 dark:border-surface-700",
        "bg-surface-0 dark:bg-surface-800",
        "text-surface-600 dark:text-surface-0/80",
        {
          "text-surface-900 ark:text-surface-0": e.active
        },
        // Transition
        "transition duration-200 ease-in-out",
        "transition-shadow duration-200"
      ]
    };
  },
  headeraction: {
    class: [
      "relative",
      // Font
      "font-semibold",
      "text-sm",
      "leading-none",
      // Flex & Alignments
      "flex items-center",
      // Spacing
      "px-3 py-2",
      // Misc
      "select-none cursor-pointer no-underline"
    ]
  },
  headerlabel: {
    class: "leading-none"
  },
  headerIcon: {
    class: "mr-2 text-sm"
  },
  submenuicon: {
    class: "ml-auto order-last text-sm"
  },
  menucontent: {
    class: [
      // Spacing
      "py-1",
      // Shape
      "border border-t-0",
      "rounded-t-none rounded-br-md rounded-bl-md",
      // Color
      "text-surface-700 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-800",
      "border-surface-200 dark:border-surface-700"
    ]
  },
  menu: {
    class: ["outline-none", "m-0 p-0 list-none"]
  },
  content: {
    class: [
      // Shape
      "border-none rounded-none",
      // Color
      "text-surface-700 dark:text-white/80",
      // Transition
      "transition-shadow duration-200"
    ]
  },
  action: ({ context: e }) => ({
    class: [
      "relative",
      // Font
      "text-sm leading-none",
      // Flex & Alignments
      "flex items-center",
      // Spacing
      "py-2 px-3",
      // Color
      "text-surface-700 dark:text-white/80",
      // States
      "hover:bg-surface-100 dark:hover:bg-surface-700/80 hover:text-surface-700 dark:hover:text-white/80",
      {
        "bg-surface-200 text-surface-700 dark:text-white/80 dark:bg-surface-600/90": e.focused
      },
      // Misc
      "cursor-pointer no-underline",
      "select-none overflow-hidden"
    ]
  }),
  icon: {
    class: "mr-2"
  },
  submenu: {
    class: "p-0 pl-4 m-0 list-none"
  },
  transition: {
    enterFromClass: "max-h-0",
    enterActiveClass: "overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",
    enterToClass: "max-h-[1000px]",
    leaveFromClass: "max-h-[1000px]",
    leaveActiveClass: "overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]",
    leaveToClass: "max-h-0"
  }
}, Se = {
  root: ({ props: e }) => ({
    class: [
      "inline-flex relative",
      {
        "opacity-60 select-none pointer-events-none cursor-default": e.disabled
      }
    ]
  }),
  panel: {
    class: [
      // Spacing
      "p-3",
      // Shape
      "border-0 dark:border",
      "shadow-md rounded-md",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-white/80",
      "dark:border-surface-700"
    ]
  },
  meter: {
    class: [
      // Position and Overflow
      "overflow-hidden",
      "relative",
      // Shape and Size
      "border-0",
      "h-2",
      "rounded-md",
      // Spacing
      "mb-2",
      // Colors
      "bg-surface-100 dark:bg-surface-700"
    ]
  },
  meterlabel: ({ instance: e }) => {
    var r, t, a;
    return {
      class: [
        // Size
        "h-full",
        // Colors
        {
          "bg-red-500 dark:bg-red-400/50": ((r = e == null ? void 0 : e.meter) == null ? void 0 : r.strength) == "weak",
          "bg-orange-500 dark:bg-orange-400/50": ((t = e == null ? void 0 : e.meter) == null ? void 0 : t.strength) == "medium",
          "bg-green-500 dark:bg-green-400/50": ((a = e == null ? void 0 : e.meter) == null ? void 0 : a.strength) == "strong"
        },
        // Transitions
        "transition-all duration-1000 ease-in-out"
      ]
    };
  },
  showicon: {
    class: ["absolute top-1/2 right-3 -mt-2", "text-surface-600 dark:text-white/70"]
  },
  hideicon: {
    class: ["absolute top-1/2 right-3 -mt-2", "text-surface-600 dark:text-white/70"]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, Me = {
  root: {
    class: [
      // Flexbox
      "flex lg:flex-row flex-col"
    ]
  },
  sourcecontrols: {
    class: [
      // Flexbox & Alignment
      "flex lg:flex-col justify-center gap-2",
      // Spacing
      "p-3"
    ]
  },
  sourcemoveupbutton: {
    root: ({ context: e }) => ({
      class: [
        // Flexbox & Alignment
        "relative inline-flex items-center justify-center",
        // Shape
        "rounded-md",
        // Color
        "text-white dark:text-surface-900",
        "bg-primary-500 dark:bg-primary-400",
        "border border-primary-500 dark:border-primary-400",
        // Spacing & Size
        "text-sm",
        "w-8",
        "m-0",
        "px-2.5 py-1.5 min-w-[2rem]",
        "shadow-sm",
        // Transitions
        "transition duration-200 ease-in-out",
        // State
        "hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300",
        "focus:outline-none focus:outline-offset-0 focus:ring-2",
        "focus:ring-primary-500 dark:focus:ring-primary-400",
        {
          "cursor-default pointer-events-none opacity-60": e.disabled
        },
        // Interactivity
        "cursor-pointer user-select-none"
      ]
    }),
    label: {
      class: [
        // Flexbox
        "flex-initial",
        // Size
        "w-0"
      ]
    }
  },
  sourcemovetopbutton: {
    root: ({ context: e }) => ({
      class: [
        // Flexbox & Alignment
        "relative inline-flex items-center justify-center",
        // Shape
        "rounded-md",
        // Color
        "text-white dark:text-surface-900",
        "bg-primary-500 dark:bg-primary-400",
        "border border-primary-500 dark:border-primary-400",
        // Spacing & Size
        "text-sm",
        "w-8",
        "m-0",
        "px-2.5 py-1.5 min-w-[2rem]",
        "shadow-sm",
        // Transitions
        "transition duration-200 ease-in-out",
        // State
        "hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300",
        "focus:outline-none focus:outline-offset-0 focus:ring-2",
        "focus:ring-primary-500 dark:focus:ring-primary-400",
        {
          "cursor-default pointer-events-none opacity-60": e.disabled
        },
        // Interactivity
        "cursor-pointer user-select-none"
      ]
    }),
    label: {
      class: [
        // Flexbox
        "flex-initial",
        // Size
        "w-0"
      ]
    }
  },
  sourcemovedownbutton: {
    root: ({ context: e }) => ({
      class: [
        // Flexbox & Alignment
        "relative inline-flex items-center justify-center",
        // Shape
        "rounded-md",
        // Color
        "text-white dark:text-surface-900",
        "bg-primary-500 dark:bg-primary-400",
        "border border-primary-500 dark:border-primary-400",
        // Spacing & Size
        "text-sm",
        "w-8",
        "m-0",
        "px-2.5 py-1.5 min-w-[2rem]",
        "shadow-sm",
        // Transitions
        "transition duration-200 ease-in-out",
        // State
        "hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300",
        "focus:outline-none focus:outline-offset-0 focus:ring-2",
        "focus:ring-primary-500 dark:focus:ring-primary-400",
        {
          "cursor-default pointer-events-none opacity-60": e.disabled
        },
        // Interactivity
        "cursor-pointer user-select-none"
      ]
    }),
    label: {
      class: [
        // Flexbox
        "flex-initial",
        // Size
        "w-0"
      ]
    }
  },
  sourcemovebottombutton: {
    root: ({ context: e }) => ({
      class: [
        // Flexbox & Alignment
        "relative inline-flex items-center justify-center",
        // Shape
        "rounded-md",
        // Color
        "text-white dark:text-surface-900",
        "bg-primary-500 dark:bg-primary-400",
        "border border-primary-500 dark:border-primary-400",
        // Spacing & Size
        "text-sm",
        "w-8",
        "m-0",
        "px-2.5 py-1.5 min-w-[2rem]",
        "shadow-sm",
        // Transitions
        "transition duration-200 ease-in-out",
        // State
        "hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300",
        "focus:outline-none focus:outline-offset-0 focus:ring-2",
        "focus:ring-primary-500 dark:focus:ring-primary-400",
        {
          "cursor-default pointer-events-none opacity-60": e.disabled
        },
        // Interactivity
        "cursor-pointer user-select-none"
      ]
    }),
    label: {
      class: [
        // Flexbox
        "flex-initial",
        // Size
        "w-0"
      ]
    }
  },
  sourcewrapper: {
    class: "grow shrink basis-2/4"
  },
  sourceheader: {
    class: [
      "font-semibold",
      // Shape
      "border-b rounded-t-md",
      // Spacing
      "py-3.5 px-3",
      // Color
      "text-surface-800 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-800",
      "border-surface-200 dark:border-surface-700 border-b"
    ]
  },
  sourcelist: {
    class: [
      // Spacing
      "list-none m-0 p-0",
      // Size
      "min-h-[12rem] max-h-[24rem]",
      // Shape
      "rounded-b-md border-0",
      // Color
      "text-surface-600 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-800",
      "border border-surface-200 dark:border-surface-700",
      // Spacing
      "py-3 px-0",
      // Focus & Outline
      "outline-none",
      // Misc
      "overflow-auto"
    ]
  },
  item: ({ context: e }) => ({
    class: [
      // Position
      "relative",
      // Spacing
      "py-3.5 px-3 m-0",
      // Shape
      "border-b last:border-b-0",
      // Transition
      "transition duration-200",
      // Color
      "text-surface-700 dark:text-white/80",
      "border-surface-200 dark:border-surface-700",
      {
        "bg-surface-100 dark:bg-surface-600/30": e.active && !e.focused
      },
      {
        "bg-surface-200 dark:bg-surface-500/30": e.active && e.focused
      },
      {
        "bg-surface-50 dark:bg-surface-700/70": !e.active && e.focused
      },
      // State
      "hover:bg-surface-100 dark:hover:bg-surface-700",
      // Misc
      "cursor-pointer overflow-hidden"
    ]
  }),
  buttons: {
    class: "flex lg:flex-col justify-center gap-2 p-3"
  },
  movetotargetbutton: {
    root: ({ context: e }) => ({
      class: [
        // Flexbox & Alignment
        "relative inline-flex items-center justify-center",
        // Shape
        "rounded-md",
        // Color
        "text-white dark:text-surface-900",
        "bg-primary-500 dark:bg-primary-400",
        "border border-primary-500 dark:border-primary-400",
        // Spacing & Size
        "text-sm",
        "w-8",
        "m-0",
        "px-2.5 py-1.5 min-w-[2rem]",
        "shadow-sm",
        // Transitions
        "transition duration-200 ease-in-out",
        // State
        "hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300",
        "focus:outline-none focus:outline-offset-0 focus:ring-2",
        "focus:ring-primary-500 dark:focus:ring-primary-400",
        {
          "cursor-default pointer-events-none opacity-60": e.disabled
        },
        // Interactivity
        "cursor-pointer user-select-none"
      ]
    }),
    label: {
      class: [
        // Flexbox
        "flex-initial",
        // Size
        "w-0"
      ]
    }
  },
  movealltotargetbutton: {
    root: ({ context: e }) => ({
      class: [
        // Flexbox & Alignment
        "relative inline-flex items-center justify-center",
        // Shape
        "rounded-md",
        // Color
        "text-white dark:text-surface-900",
        "bg-primary-500 dark:bg-primary-400",
        "border border-primary-500 dark:border-primary-400",
        // Spacing & Size
        "text-sm",
        "w-8",
        "m-0",
        "px-2.5 py-1.5 min-w-[2rem]",
        "shadow-sm",
        // Transitions
        "transition duration-200 ease-in-out",
        // State
        "hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300",
        "focus:outline-none focus:outline-offset-0 focus:ring-2",
        "focus:ring-primary-500 dark:focus:ring-primary-400",
        {
          "cursor-default pointer-events-none opacity-60": e.disabled
        },
        // Interactivity
        "cursor-pointer user-select-none"
      ]
    }),
    label: {
      class: [
        // Flexbox
        "flex-initial",
        // Size
        "w-0"
      ]
    }
  },
  movetosourcebutton: {
    root: ({ context: e }) => ({
      class: [
        // Flexbox & Alignment
        "relative inline-flex items-center justify-center",
        // Shape
        "rounded-md",
        // Color
        "text-white dark:text-surface-900",
        "bg-primary-500 dark:bg-primary-400",
        "border border-primary-500 dark:border-primary-400",
        // Spacing & Size
        "text-sm",
        "w-8",
        "m-0",
        "px-2.5 py-1.5 min-w-[2rem]",
        "shadow-sm",
        // Transitions
        "transition duration-200 ease-in-out",
        // State
        "hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300",
        "focus:outline-none focus:outline-offset-0 focus:ring-2",
        "focus:ring-primary-500 dark:focus:ring-primary-400",
        {
          "cursor-default pointer-events-none opacity-60": e.disabled
        },
        // Interactivity
        "cursor-pointer user-select-none"
      ]
    }),
    label: {
      class: [
        // Flexbox
        "flex-initial",
        // Size
        "w-0"
      ]
    }
  },
  movealltosourcebutton: {
    root: ({ context: e }) => ({
      class: [
        // Flexbox & Alignment
        "relative inline-flex items-center justify-center",
        // Shape
        "rounded-md",
        // Color
        "text-white dark:text-surface-900",
        "bg-primary-500 dark:bg-primary-400",
        "border border-primary-500 dark:border-primary-400",
        // Spacing & Size
        "text-sm",
        "w-8",
        "m-0",
        "px-2.5 py-1.5 min-w-[2rem]",
        "shadow-sm",
        // Transitions
        "transition duration-200 ease-in-out",
        // State
        "hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300",
        "focus:outline-none focus:outline-offset-0 focus:ring-2",
        "focus:ring-primary-500 dark:focus:ring-primary-400",
        {
          "cursor-default pointer-events-none opacity-60": e.disabled
        },
        // Interactivity
        "cursor-pointer user-select-none"
      ]
    }),
    label: {
      class: [
        // Flexbox
        "flex-initial",
        // Size
        "w-0"
      ]
    }
  },
  targetcontrols: {
    class: "flex lg:flex-col justify-center gap-2 p-3"
  },
  targetmoveupbutton: {
    root: ({ context: e }) => ({
      class: [
        // Flexbox & Alignment
        "relative inline-flex items-center justify-center",
        // Shape
        "rounded-md",
        // Color
        "text-white dark:text-surface-900",
        "bg-primary-500 dark:bg-primary-400",
        "border border-primary-500 dark:border-primary-400",
        // Spacing & Size
        "text-sm",
        "w-8",
        "m-0",
        "px-2.5 py-1.5 min-w-[2rem]",
        "shadow-sm",
        // Transitions
        "transition duration-200 ease-in-out",
        // State
        "hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300",
        "focus:outline-none focus:outline-offset-0 focus:ring-2",
        "focus:ring-primary-500 dark:focus:ring-primary-400",
        {
          "cursor-default pointer-events-none opacity-60": e.disabled
        },
        // Interactivity
        "cursor-pointer user-select-none"
      ]
    }),
    label: {
      class: [
        // Flexbox
        "flex-initial",
        // Size
        "w-0"
      ]
    }
  },
  targetmovetopbutton: {
    root: ({ context: e }) => ({
      class: [
        // Flexbox & Alignment
        "relative inline-flex items-center justify-center",
        // Shape
        "rounded-md",
        // Color
        "text-white dark:text-surface-900",
        "bg-primary-500 dark:bg-primary-400",
        "border border-primary-500 dark:border-primary-400",
        // Spacing & Size
        "text-sm",
        "w-8",
        "m-0",
        "px-2.5 py-1.5 min-w-[2rem]",
        "shadow-sm",
        // Transitions
        "transition duration-200 ease-in-out",
        // State
        "hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300",
        "focus:outline-none focus:outline-offset-0 focus:ring-2",
        "focus:ring-primary-500 dark:focus:ring-primary-400",
        {
          "cursor-default pointer-events-none opacity-60": e.disabled
        },
        // Interactivity
        "cursor-pointer user-select-none"
      ]
    }),
    label: {
      class: [
        // Flexbox
        "flex-initial",
        // Size
        "w-0"
      ]
    }
  },
  targetmovedownbutton: {
    root: ({ context: e }) => ({
      class: [
        // Flexbox & Alignment
        "relative inline-flex items-center justify-center",
        // Shape
        "rounded-md",
        // Color
        "text-white dark:text-surface-900",
        "bg-primary-500 dark:bg-primary-400",
        "border border-primary-500 dark:border-primary-400",
        // Spacing & Size
        "text-sm",
        "w-8",
        "m-0",
        "px-2.5 py-1.5 min-w-[2rem]",
        "shadow-sm",
        // Transitions
        "transition duration-200 ease-in-out",
        // State
        "hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300",
        "focus:outline-none focus:outline-offset-0 focus:ring-2",
        "focus:ring-primary-500 dark:focus:ring-primary-400",
        {
          "cursor-default pointer-events-none opacity-60": e.disabled
        },
        // Interactivity
        "cursor-pointer user-select-none"
      ]
    }),
    label: {
      class: [
        // Flexbox
        "flex-initial",
        // Size
        "w-0"
      ]
    }
  },
  targetmovebottombutton: {
    root: ({ context: e }) => ({
      class: [
        // Flexbox & Alignment
        "relative inline-flex items-center justify-center",
        // Shape
        "rounded-md",
        // Color
        "text-white dark:text-surface-900",
        "bg-primary-500 dark:bg-primary-400",
        "border border-primary-500 dark:border-primary-400",
        // Spacing & Size
        "text-sm",
        "w-8",
        "m-0",
        "px-2.5 py-1.5 min-w-[2rem]",
        "shadow-sm",
        // Transitions
        "transition duration-200 ease-in-out",
        // State
        "hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300",
        "focus:outline-none focus:outline-offset-0 focus:ring-2",
        "focus:ring-primary-500 dark:focus:ring-primary-400",
        {
          "cursor-default pointer-events-none opacity-60": e.disabled
        },
        // Interactivity
        "cursor-pointer user-select-none"
      ]
    }),
    label: {
      class: [
        // Flexbox
        "flex-initial",
        // Size
        "w-0"
      ]
    }
  },
  targetwrapper: {
    class: "grow shrink basis-2/4"
  },
  targetheader: {
    class: [
      "font-semibold",
      // Shape
      "border-b rounded-t-md",
      // Spacing
      "py-3.5 px-3",
      // Color
      "text-surface-800 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-800",
      "border-surface-200 dark:border-surface-700 border-b"
    ]
  },
  targetlist: {
    class: [
      // Spacing
      "list-none m-0 p-0",
      // Size
      "min-h-[12rem] max-h-[24rem]",
      // Shape
      "rounded-b-md border-0",
      // Color
      "text-surface-600 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-800",
      "border border-surface-200 dark:border-surface-700",
      // Spacing
      "py-3 px-0",
      // Focus & Outline
      "outline-none",
      // Misc
      "overflow-auto"
    ]
  },
  transition: {
    enterFromClass: "!transition-none",
    enterActiveClass: "!transition-none",
    leaveActiveClass: "!transition-none",
    leaveToClass: "!transition-none"
  }
}, Fe = {
  root: ({ props: e }) => ({
    class: [
      // Position and Overflow
      "relative overflow-hidden",
      // Shape and Size
      "border-0",
      "rounded-md",
      {
        "h-7 pt-5": e.mode !== "indeterminate" && e.showValue
      },
      {
        "h-2 bg-surface-100 dark:bg-surface-700 ": e.mode == "indeterminate" || !e.showValue
      },
      // Before & After (!indeterminate)
      {
        "before:absolute before:w-full before:rounded-md before:h-2 before:top-[1.25rem] before:left-0 before:bottom-0 before:bg-surface-100 dark:before:bg-surface-700": e.mode !== "indeterminate"
      }
    ]
  }),
  value: ({ props: e }) => ({
    class: [
      // Flexbox & Overflow & Position
      {
        "absolute flex items-center justify-center": e.mode !== "indeterminate"
      },
      // Colors
      "bg-primary-500 dark:bg-primary-400",
      // Spacing & Sizing
      "m-0",
      {
        "h-2 w-0": e.mode !== "indeterminate"
      },
      // Shape
      "border-0 rounded-md",
      // Transitions
      {
        "transition-width duration-1000 ease-in-out": e.mode !== "indeterminate",
        "progressbar-value-animate": e.mode == "indeterminate"
      },
      // Before & After (indeterminate)
      {
        "before:absolute before:top-0 before:left-0 before:bottom-0 before:bg-inherit ": e.mode == "indeterminate",
        "after:absolute after:top-0 after:left-0 after:bottom-0 after:bg-inherit after:delay-1000": e.mode == "indeterminate"
      }
    ]
  }),
  label: {
    class: [
      // Flexbox
      "inline-flex justify-end",
      "absolute inset-0 mr-1 -top-[1.15rem]",
      // Font and Text
      "text-sm text-surface-600 dark:text-surface-0/60",
      "leading-none"
    ]
  }
}, Le = {
  root: {
    class: [
      "relative",
      // Flexbox & Alignment
      "inline-flex",
      "align-bottom",
      // Size
      "w-4 h-4",
      // Misc
      "cursor-default",
      "select-none"
    ]
  },
  input: ({ props: e, state: r }) => ({
    class: [
      // Flexbox
      "flex justify-center items-center",
      // Size
      "w-4 h-4",
      "text-sm",
      "font-medium",
      // Shape
      "border-2",
      "rounded-full",
      // Transition
      "transition duration-200 ease-in-out",
      // Colors
      {
        "text-surface-700 dark:text-white/80": e.value !== e.modelValue && e.value !== void 0,
        "bg-surface-0 dark:bg-surface-900": e.value !== e.modelValue && e.value !== void 0,
        "border-surface-300 dark:border-surface-700": e.value !== e.modelValue && e.value !== void 0,
        "border-primary-500 dark:border-primary-400": e.value == e.modelValue && e.value !== void 0
      },
      // States
      {
        "outline-none outline-offset-0": !e.disabled && r.focused,
        "ring-2 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-800 ring-primary-500 dark:ring-primary-400": !e.disabled && r.focused,
        "opacity-60 cursor-default": e.disabled
      }
    ]
  }),
  icon: {
    class: "hidden"
  }
}, _e = {
  root: ({ props: e }) => ({
    class: [
      "relative",
      // Flex & Alignment
      "flex items-center",
      "gap-1",
      // Misc
      {
        "opacity-60 select-none pointer-events-none cursor-default": e.disabled
      }
    ]
  }),
  cancelitem: ({ context: e }) => ({
    class: [
      // Flex & Alignment
      "inline-flex items-center",
      //State
      {
        "outline-none ring-2 ring-primary-500 dark:ring-primary-400": e.focused
      },
      // Misc
      "cursor-pointer"
    ]
  }),
  cancelicon: {
    class: [
      // Size
      "w-5 h-5",
      // Color
      "text-red-500 dark:text-red-400"
    ]
  },
  item: ({ props: e, context: r }) => ({
    class: [
      // Flex & Alignment
      "inline-flex items-center",
      // State
      {
        "outline-none ring-2 ring-primary-500 dark:ring-primary-400": r.focused
      },
      // Misc
      {
        "cursor-pointer": !e.readonly,
        "cursor-default": e.readonly
      }
    ]
  }),
  officon: ({ props: e }) => ({
    class: [
      // Size
      "w-5 h-5",
      // Color
      "text-surface-700 dark:text-surface-0/70",
      // State
      {
        "hover:text-primary-500 dark:hover:text-primary-400": !e.readonly
      },
      // Transition
      "transition duration-200 ease-in"
    ]
  }),
  onicon: ({ props: e }) => ({
    class: [
      // Size
      "w-5 h-5",
      // Color
      "text-primary-500 dark:text-primary-400",
      // Transition
      "transition duration-200 ease-in"
    ]
  })
}, Be = {
  root: {
    class: ["block absolute bg-surface-0/50 rounded-full pointer-events-none"],
    style: "transform: scale(0)"
  }
}, Oe = {
  wrapper: {
    class: [
      // Size & Position
      "h-full w-full",
      // Layering
      "z-[1]",
      // Spacing
      "overflow-hidden",
      // Misc
      "relative float-left"
    ]
  },
  content: {
    class: [
      // Size & Spacing
      "h-[calc(100%+12px)] w-[calc(100%+12px)] pr-[12px] pb-[12px] pl-0 pt-0",
      // Overflow & Scrollbar
      "overflow-scroll scrollbar-none",
      // Box Model
      "box-border",
      // Position
      "relative",
      // Webkit Specific
      "[&::-webkit-scrollbar]:hidden"
    ]
  },
  barX: {
    class: [
      // Size & Position
      "h-[6px] bottom-0",
      // Appearance
      "bg-surface-100 dark:bg-surface-700 rounded",
      // Interactivity
      "cursor-pointer",
      // Visibility & Layering
      "invisible z-20",
      // Transition
      "transition duration-[250ms] ease-linear",
      // Misc
      "relative"
    ]
  },
  barY: {
    class: [
      // Size & Position
      "w-[6px] top-0",
      // Appearance
      "bg-surface-100 dark:bg-surface-700 rounded",
      // Interactivity
      "cursor-pointer",
      // Visibility & Layering
      "z-20",
      // Transition
      "transition duration-[250ms] ease-linear",
      // Misc
      "relative"
    ]
  }
}, Ne = {
  root: ({ props: e }) => ({
    class: [
      // Flex & Alignment
      "flex items-center justify-center",
      // Positioning
      {
        sticky: e.target === "parent",
        fixed: e.target === "window"
      },
      "bottom-[20px] right-[20px]",
      "ml-auto",
      // Shape & Size
      {
        "rounded-md h-8 w-8": e.target === "parent",
        "h-12 w-12 rounded-full shadow-md": e.target === "window"
      },
      // Color
      "text-white dark:text-surface-900",
      {
        "bg-primary-500 dark:bg-primary-400 hover:bg-primary-600 dark:hover:bg-primary-300": e.target === "parent",
        "bg-surface-500 dark:bg-surface-400 hover:bg-surface-600 dark:hover:bg-surface-300": e.target === "window"
      },
      // States
      {
        "hover:bg-primary-600 dark:hover:bg-primary-300": e.target === "parent",
        "hover:bg-surface-600 dark:hover:bg-surface-300": e.target === "window"
      }
    ]
  }),
  transition: {
    enterFromClass: "opacity-0",
    enterActiveClass: "transition-opacity duration-150",
    leaveActiveClass: "transition-opacity duration-150",
    leaveToClass: "opacity-0"
  }
}, Pe = {
  root: ({ props: e, state: r, parent: t }) => ({
    class: [
      // Display and Position
      "inline-flex",
      "relative max-h-8",
      // Shape
      "rounded-md",
      "shadow-sm",
      // Color and Background
      "bg-white dark:bg-surface-900",
      "border-0 border-surface-300",
      // Transitions
      "transition-all",
      "duration-200",
      // States
      {
        "ring-1 ring-inset ring-gray-b dark:ring-surface-700": !r.focused,
        "ring-1 ring-inset ring-sky-600 dark:ring-primary-400": r.focused
      },
      // Misc
      "cursor-pointer",
      "select-none",
      {
        "opacity-60": e.disabled,
        "pointer-events-none": e.disabled,
        "cursor-default": e.disabled
      }
    ]
  }),
  label: ({ props: e, parent: r }) => {
    var t;
    return {
      class: [
        //Font
        "font-sans",
        "leading-6",
        "sm:text-sm",
        // Display
        "block",
        "flex-auto w-16",
        // Color and Background
        "bg-transparent",
        "border-0",
        {
          "text-black dark:text-white/80": e.modelValue != null,
          "text-surface-400 dark:text-surface-500": e.modelValue == null
        },
        "placeholder:text-surface-400 dark:placeholder:text-surface-500",
        // Sizing and Spacing
        "w-[1%]",
        "py-1.5 px-2",
        {
          "pr-7": e.showClear
        },
        //Shape
        "rounded-none",
        // Transitions
        "transition",
        "duration-200",
        // States
        "focus:outline-none focus:shadow-none",
        // Filled State *for FloatLabel
        {
          filled: ((t = r.instance) == null ? void 0 : t.$name) == "FloatLabel" && e.modelValue !== null
        },
        // Misc
        "relative",
        "cursor-pointer",
        "truncate",
        "appearance-none"
      ]
    };
  },
  dropdown: {
    class: [
      "sm:text-sm",
      // Flexbox
      "flex items-center justify-center",
      "shrink-0",
      // Color and Background
      "bg-transparent",
      "text-surface-500",
      // Size
      "w-6",
      // Shape
      "rounded-tr-md",
      "rounded-br-md"
    ]
  },
  overlay: {
    class: [
      // Position
      "absolute top-0 left-0",
      "mt-0.5",
      // Shape
      "border-0",
      "rounded-md",
      "shadow-md",
      // Color
      "bg-white dark:bg-surface-800",
      "text-gray-800 dark:text-white/80",
      "ring-1 ring-inset ring-gray-b dark:ring-surface-700"
    ]
  },
  listcontainer: {
    class: [
      // Sizing
      "max-h-[15rem]",
      // Misc
      "overflow-auto"
    ]
  },
  list: {
    class: "p-1 list-none m-0"
  },
  option: ({ context: e }) => ({
    class: [
      // Font
      "sm:text-sm",
      "leading-none",
      {
        "font-normal": !e.selected,
        "font-semibold": e.selected
      },
      // Position
      "relative",
      // Shape
      "border-0",
      "rounded-md",
      // Spacing
      "m-0",
      "py-2 px-4",
      // Colors
      {
        "bg-white dark:bg-surface-600/60 text-surface-700 dark:text-white/80": !e.selected
      },
      {
        "!bg-sky-200 dark:bg-primary-400 text-black dark:text-surface-700": e.selected
      },
      //States
      "hover:bg-sky-100 dark:hover:bg-primary-400 dark:hover:text-surface-700",
      "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      // Transitions
      "transition-shadow",
      "duration-200",
      // Misc
      {
        "pointer-events-none cursor-default": e.disabled
      },
      {
        "cursor-pointer": !e.disabled
      },
      "overflow-hidden",
      "whitespace-nowrap"
    ]
  }),
  optionGroup: {
    class: [
      //Font
      "font-bold",
      // Spacing
      "m-0",
      "py-3 px-5",
      // Color
      "text-black dark:text-white/80",
      "bg-white dark:bg-surface-600/80",
      // Misc
      "cursor-auto"
    ]
  },
  optionCheckIcon: "relative -ms-1.5 me-1.5 text-surface-700 dark:text-white/80 w-4 h-4",
  optionBlankIcon: "w-4 h-4",
  emptyMessage: {
    class: [
      // Font
      "leading-none",
      // Spacing
      "py-3 px-5",
      // Color
      "text-black dark:text-white/80",
      "bg-transparent"
    ]
  },
  header: {
    class: [
      // Spacing
      "py-3 px-5",
      "m-0",
      //Shape
      "border-b",
      "rounded-tl-md",
      "rounded-tr-md",
      // Color
      "text-surface-700 dark:text-white/80",
      "bg-surface-100 dark:bg-surface-800",
      "border-surface-300 dark:border-surface-700"
    ]
  },
  clearIcon: {
    class: [
      // Color
      "text-surface-500",
      // Position
      "absolute",
      "top-1/2",
      "right-12",
      // Spacing
      "-mt-2"
    ]
  },
  loadingIcon: {
    class: "text-surface-400 dark:text-surface-500 animate-spin"
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, De = {
  root: ({ props: e }) => ({
    class: ["shadow-sm", {
      "opacity-60 select-none pointer-events-none cursor-default": e.disabled
    }]
  }),
  button: ({ context: e }) => ({
    class: [
      "relative",
      // Font
      "text-sm",
      "leading-none",
      // Flex Alignment
      "inline-flex items-center align-bottom text-center",
      // Spacing
      "px-2.5 py-1.5",
      // Shape
      "ring-1 ring-surface-200 dark:ring-surface-700",
      "first:rounded-l-md first:rounded-tr-none first:rounded-br-none",
      "last:rounded-tl-none last:rounded-bl-none last:rounded-r-md ",
      // Color
      {
        "bg-surface-0 dark:bg-surface-900": !e.active,
        "text-surface-700 dark:text-white/80": !e.active,
        "bg-surface-100 dark:bg-surface-700": e.active
      },
      // States
      "focus:outline-none focus:outline-offset-0 focus:ring-primary-500 dark:focus:ring-primary-400",
      "hover:bg-surface-200 dark:hover:bg-surface-600/80",
      {
        "opacity-60 select-none pointer-events-none cursor-default": e.disabled
      },
      // Transition
      "transition duration-200",
      // Misc
      "cursor-pointer select-none overflow-hidden"
    ]
  }),
  label: {
    class: "font-semibold"
  }
}, Ee = {
  root: ({ props: e }) => ({
    class: [
      // Flexbox
      "flex flex-col",
      // Position
      "relative",
      {
        "!transition-none !transform-none !w-screen !h-screen !max-h-full !top-0 !left-0": e.position == "full"
      },
      // Size
      {
        "h-full w-full max-w-[28rem]": e.position == "left" || e.position == "right",
        "h-auto w-full": e.position == "top" || e.position == "bottom"
      },
      // Shape
      "border-0 dark:border",
      "shadow-xl",
      // Colors
      "bg-surface-0 dark:bg-surface-800",
      "text-surface-700 dark:text-white/80",
      "dark:border-surface-700",
      // Transitions
      "transition-transform",
      "duration-300",
      // Misc
      "pointer-events-auto"
    ]
  }),
  header: {
    class: [
      // Flexbox and Alignment
      "flex items-center justify-between",
      "shrink-0",
      // Spacing
      "px-6 pt-6",
      // Colors
      "bg-surface-0 dark:bg-surface-800",
      "text-surface-700 dark:text-surface-0/80"
    ]
  },
  title: {
    class: ["font-semibold leading-6 text-base m-0"]
  },
  icons: {
    class: ["flex items-center"]
  },
  closeButton: {
    class: [
      "relative",
      // Flexbox and Alignment
      "flex items-center justify-center",
      // Size and Spacing
      "mr-2",
      "last:mr-0",
      "w-6 h-6",
      // Shape
      "border-0",
      "rounded-full",
      // Colors
      "text-surface-500",
      "bg-transparent",
      // Transitions
      "transition duration-200 ease-in-out",
      // States
      "hover:text-surface-700 dark:hover:text-white/80",
      "hover:bg-surface-100 dark:hover:bg-surface-800/80",
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-inset",
      "focus:ring-primary-500 dark:focus:ring-primary-400",
      // Misc
      "overflow-hidden"
    ]
  },
  closeicon: {
    class: [
      // Display
      "inline-block",
      // Size
      "w-3",
      "h-3"
    ]
  },
  content: {
    class: [
      // Spacing and Size
      "px-6 pb-6",
      "mt-6",
      "h-full",
      "w-full",
      // Growth and Overflow
      "grow",
      "overflow-y-auto"
    ]
  },
  mask: ({ props: e }) => ({
    class: [
      // Transitions
      "transition",
      "duration-200",
      {
        "p-5": !e.position == "full"
      },
      // Background and Effects
      {
        "bg-surface-500/70 dark:bg-surface-700/70": e.modal,
        "backdrop-blur-sm": e.modal
      }
    ]
  }),
  transition: ({ props: e }) => e.position === "top" ? {
    enterFromClass: "translate-x-0 -translate-y-full translate-z-0",
    leaveToClass: "translate-x-0 -translate-y-full translate-z-0"
  } : e.position === "bottom" ? {
    enterFromClass: "translate-x-0 translate-y-full translate-z-0",
    leaveToClass: "translate-x-0 translate-y-full translate-z-0"
  } : e.position === "left" ? {
    enterFromClass: "-translate-x-full translate-y-0 translate-z-0",
    leaveToClass: "-translate-x-full translate-y-0 translate-z-0"
  } : e.position === "right" ? {
    enterFromClass: "translate-x-full translate-y-0 translate-z-0",
    leaveToClass: "translate-x-full translate-y-0 translate-z-0"
  } : {
    enterFromClass: "opacity-0",
    enterActiveClass: "transition-opacity duration-400 ease-in",
    leaveActiveClass: "transition-opacity duration-400 ease-in",
    leaveToClass: "opacity-0"
  }
}, Re = {
  root: ({ props: e }) => ({
    class: [
      "overflow-hidden",
      {
        "animate-pulse": e.animation !== "none"
      },
      // Round
      {
        "rounded-full": e.shape === "circle",
        "rounded-md": e.shape !== "circle"
      },
      // Colors
      "bg-surface-200 dark:bg-surface-700"
    ]
  })
}, Ve = {
  root: ({ props: e }) => ({
    class: [
      "relative",
      "flex items-center",
      // Size
      {
        "h-2 w-full min-w-[15rem]": e.orientation == "horizontal",
        "w-2 h-full min-h-[15rem]": e.orientation == "vertical"
      },
      // Shape
      "border-0 rounded-lg",
      // Colors
      "bg-surface-100 dark:bg-surface-700",
      // States
      {
        "opacity-60 select-none pointer-events-none cursor-default": e.disabled
      }
    ]
  }),
  range: ({ props: e }) => ({
    class: [
      // Position
      "block absolute",
      {
        "top-0 left-0": e.orientation == "horizontal",
        "bottom-0 left-0": e.orientation == "vertical"
      },
      //Size
      {
        "h-full": e.orientation == "horizontal",
        "w-full": e.orientation == "vertical"
      },
      //Shape
      "rounded-lg",
      // Colors
      "bg-primary-500 dark:bg-primary-400"
    ]
  }),
  handle: ({ props: e }) => ({
    class: [
      "block",
      // Size
      "h-4",
      "w-4",
      {
        "top-[50%] mt-[-0.5rem] ml-[-0.5rem]": e.orientation == "horizontal",
        "left-[50%] mb-[-0.5rem] ml-[-0.5rem]": e.orientation == "vertical"
      },
      // Shape
      "rounded-full",
      "ring-2",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "ring-primary-500 dark:ring-primary-400",
      // Transitions
      "transition duration-200",
      // Misc
      "cursor-grab",
      "touch-action-none"
    ]
  }),
  starthandler: ({ props: e }) => ({
    class: [
      "block",
      // Size
      "h-4",
      "w-4",
      {
        "top-[50%] mt-[-0.5rem] ml-[-0.5rem]": e.orientation == "horizontal",
        "left-[50%] mb-[-0.5rem] ml-[-0.5rem]": e.orientation == "vertical"
      },
      // Shape
      "rounded-full",
      "ring-2",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "ring-primary-500 dark:ring-primary-400",
      // Transitions
      "transition duration-200",
      // Misc
      "cursor-grab",
      "touch-action-none"
    ]
  }),
  endhandler: ({ props: e }) => ({
    class: [
      "block",
      // Size
      "h-4",
      "w-4",
      {
        "top-[50%] mt-[-0.5rem] ml-[-0.5rem]": e.orientation == "horizontal",
        "left-[50%] mb-[-0.5rem] ml-[-0.5rem]": e.orientation == "vertical"
      },
      // Shape
      "rounded-full",
      "ring-2",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "ring-primary-500 dark:ring-primary-400",
      // Transitions
      "transition duration-200",
      // Misc
      "cursor-grab",
      "touch-action-none"
    ]
  })
}, Ge = {
  root: ({ props: e }) => ({
    class: [
      // Flexbox and Position
      "inline-flex",
      "relative",
      // Shape
      "rounded-md",
      {
        "shadow-lg": e.raised
      }
    ]
  }),
  button: {
    root: ({ parent: e }) => ({
      class: [
        "relative",
        // Alignments
        "items-center inline-flex text-center align-bottom justify-center",
        // Sizes & Spacing
        "text-sm",
        {
          "px-2.5 py-1.5 min-w-[2rem]": e.props.size === null && e.props.label !== null,
          "px-2 py-1": e.props.size === "small",
          "px-3 py-2": e.props.size === "large"
        },
        {
          "h-8 w-8 p-0": e.props.label == null
        },
        // Shape
        "rounded-r-none",
        "border-r-0",
        {
          "rounded-l-full": e.props.rounded
        },
        {
          "rounded-md": !e.props.rounded,
          "rounded-full": e.props.rounded
        },
        // Link Button
        {
          "text-primary-600 bg-transparent ring-transparent": e.props.link
        },
        // Plain Button
        {
          "text-white bg-gray-500 ring-1 ring-gray-500": e.props.plain && !e.props.outlined && !e.props.text
        },
        // Plain Text Button
        {
          "text-surface-500": e.props.plain && e.props.text
        },
        // Plain Outlined Button
        {
          "text-surface-500 ring-1 ring-gray-500": e.props.plain && e.props.outlined
        },
        // Text Button
        {
          "bg-transparent ring-transparent": e.props.text && !e.props.plain
        },
        // Outlined Button
        {
          "bg-transparent": e.props.outlined && !e.props.plain
        },
        // --- Severity Buttons ---
        // Primary Button
        {
          "text-white dark:text-surface-900": !e.props.link && e.props.severity === null && !e.props.text && !e.props.outlined && !e.props.plain,
          "bg-primary-500 dark:bg-primary-400": !e.props.link && e.props.severity === null && !e.props.text && !e.props.outlined && !e.props.plain,
          "ring-1 ring-primary-500 dark:ring-primary-400": !e.props.link && e.props.severity === null && !e.props.text && !e.props.outlined && !e.props.plain
        },
        // Primary Text Button
        {
          "text-primary-500 dark:text-primary-400": e.props.text && e.props.severity === null && !e.props.plain
        },
        // Primary Outlined Button
        {
          "text-primary-500 ring-1 ring-primary-500 hover:bg-primary-300/20": e.props.outlined && e.props.severity === null && !e.props.plain
        },
        // Secondary Button
        {
          "text-white dark:text-surface-900": e.props.severity === "secondary" && !e.props.text && !e.props.outlined && !e.props.plain,
          "bg-surface-500 dark:bg-surface-400": e.props.severity === "secondary" && !e.props.text && !e.props.outlined && !e.props.plain,
          "ring-1 ring-surface-500 dark:ring-surface-400": e.props.severity === "secondary" && !e.props.text && !e.props.outlined && !e.props.plain
        },
        // Secondary Text Button
        {
          "text-surface-500 dark:text-surface-400": e.props.text && e.props.severity === "secondary" && !e.props.plain
        },
        // Secondary Outlined Button
        {
          "text-surface-500 ring-1 ring-surface-500 hover:bg-surface-300/20": e.props.outlined && e.props.severity === "secondary" && !e.props.plain
        },
        // Success Button
        {
          "text-white dark:text-surface-900": e.props.severity === "success" && !e.props.text && !e.props.outlined && !e.props.plain,
          "bg-green-500 dark:bg-green-400": e.props.severity === "success" && !e.props.text && !e.props.outlined && !e.props.plain,
          "ring-1 ring-green-500 dark:ring-green-400": e.props.severity === "success" && !e.props.text && !e.props.outlined && !e.props.plain
        },
        // Success Text Button
        {
          "text-surface-500 dark:text-surface-400": e.props.text && e.props.severity === "secondary" && !e.props.plain
        },
        // Success Outlined Button
        {
          "text-green-500 ring-1 ring-green-500 hover:bg-green-300/20": e.props.outlined && e.props.severity === "success" && !e.props.plain
        },
        // Info Button
        {
          "text-white dark:text-surface-900": e.props.severity === "info" && !e.props.text && !e.props.outlined && !e.props.plain,
          "bg-blue-500 dark:bg-blue-400": e.props.severity === "info" && !e.props.text && !e.props.outlined && !e.props.plain,
          "ring-1 ring-blue-500 dark:ring-blue-400": e.props.severity === "info" && !e.props.text && !e.props.outlined && !e.props.plain
        },
        // Info Text Button
        {
          "text-blue-500 dark:text-blue-400": e.props.text && e.props.severity === "info" && !e.props.plain
        },
        // Info Outlined Button
        {
          "text-blue-500 ring-1 ring-blue-500 hover:bg-blue-300/20 ": e.props.outlined && e.props.severity === "info" && !e.props.plain
        },
        // Warning Button
        {
          "text-white dark:text-surface-900": e.props.severity === "warning" && !e.props.text && !e.props.outlined && !e.props.plain,
          "bg-orange-500 dark:bg-orange-400": e.props.severity === "warning" && !e.props.text && !e.props.outlined && !e.props.plain,
          "ring-1 ring-orange-500 dark:ring-orange-400": e.props.severity === "warning" && !e.props.text && !e.props.outlined && !e.props.plain
        },
        // Warning Text Button
        {
          "text-orange-500 dark:text-orange-400": e.props.text && e.props.severity === "warning" && !e.props.plain
        },
        // Warning Outlined Button
        {
          "text-orange-500 ring-1 ring-orange-500 hover:bg-orange-300/20": e.props.outlined && e.props.severity === "warning" && !e.props.plain
        },
        // Help Button
        {
          "text-white dark:text-surface-900": e.props.severity === "help" && !e.props.text && !e.props.outlined && !e.props.plain,
          "bg-purple-500 dark:bg-purple-400": e.props.severity === "help" && !e.props.text && !e.props.outlined && !e.props.plain,
          "ring-1 ring-purple-500 dark:ring-purple-400": e.props.severity === "help" && !e.props.text && !e.props.outlined && !e.props.plain
        },
        // Help Text Button
        {
          "text-purple-500 dark:text-purple-400": e.props.text && e.props.severity === "help" && !e.props.plain
        },
        // Help Outlined Button
        {
          "text-purple-500 ring-1 ring-purple-500 hover:bg-purple-300/20": e.props.outlined && e.props.severity === "help" && !e.props.plain
        },
        // Danger Button
        {
          "text-white dark:text-surface-900": e.props.severity === "danger" && !e.props.text && !e.props.outlined && !e.props.plain,
          "bg-red-500 dark:bg-red-400": e.props.severity === "danger" && !e.props.text && !e.props.outlined && !e.props.plain,
          "ring-1 ring-red-500 dark:ring-red-400": e.props.severity === "danger" && !e.props.text && !e.props.outlined && !e.props.plain
        },
        // Danger Text Button
        {
          "text-red-500 dark:text-red-400": e.props.text && e.props.severity === "danger" && !e.props.plain
        },
        // Danger Outlined Button
        {
          "text-red-500 ring-1 ring-red-500 hover:bg-red-300/20": e.props.outlined && e.props.severity === "danger" && !e.props.plain
        },
        // --- Severity Button States ---
        "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-offset-current",
        {
          "focus:ring-offset-2": !e.props.link && !e.props.plain && !e.props.outlined && !e.props.text
        },
        // Link
        {
          "focus:ring-primary-500 dark:focus:ring-primary-400": e.props.link
        },
        // Plain
        {
          "hover:bg-gray-600 hover:ring-gray-600": e.props.plain && !e.props.outlined && !e.props.text
        },
        // Text & Outlined Button
        {
          "hover:bg-surface-300/20": e.props.plain && (e.props.text || e.props.outlined)
        },
        // Primary
        {
          "hover:bg-primary-600 dark:hover:bg-primary-300 hover:ring-primary-600 dark:hover:ring-primary-300": !e.props.link && e.props.severity === null && !e.props.text && !e.props.outlined && !e.props.plain
        },
        {
          "focus:ring-primary-500 dark:focus:ring-primary-400": e.props.severity === null
        },
        // Text & Outlined Button
        {
          "hover:bg-primary-300/20": (e.props.text || e.props.outlined) && e.props.severity === null && !e.props.plain
        },
        // Secondary
        {
          "hover:bg-surface-600 dark:hover:bg-surface-300 hover:ring-surface-600 dark:hover:ring-surface-300": e.props.severity === "secondary" && !e.props.text && !e.props.outlined && !e.props.plain
        },
        {
          "focus:ring-surface-500 dark:focus:ring-surface-400": e.props.severity === "secondary"
        },
        // Text & Outlined Button
        {
          "hover:bg-surface-300/20": (e.props.text || e.props.outlined) && e.props.severity === "secondary" && !e.props.plain
        },
        // Success
        {
          "hover:bg-green-600 dark:hover:bg-green-300 hover:ring-green-600 dark:hover:ring-green-300": e.props.severity === "success" && !e.props.text && !e.props.outlined && !e.props.plain
        },
        {
          "focus:ring-green-500 dark:focus:ring-green-400": e.props.severity === "success"
        },
        // Text & Outlined Button
        {
          "hover:bg-green-300/20": (e.props.text || e.props.outlined) && e.props.severity === "success" && !e.props.plain
        },
        // Info
        {
          "hover:bg-blue-600 dark:hover:bg-blue-300 hover:ring-blue-600 dark:hover:ring-blue-300": e.props.severity === "info" && !e.props.text && !e.props.outlined && !e.props.plain
        },
        {
          "focus:ring-blue-500 dark:focus:ring-blue-400": e.props.severity === "info"
        },
        // Text & Outlined Button
        {
          "hover:bg-blue-300/20": (e.props.text || e.props.outlined) && e.props.severity === "info" && !e.props.plain
        },
        // Warning
        {
          "hover:bg-orange-600 dark:hover:bg-orange-300 hover:ring-orange-600 dark:hover:ring-orange-300": e.props.severity === "warning" && !e.props.text && !e.props.outlined && !e.props.plain
        },
        {
          "focus:ring-orange-500 dark:focus:ring-orange-400": e.props.severity === "warning"
        },
        // Text & Outlined Button
        {
          "hover:bg-orange-300/20": (e.props.text || e.props.outlined) && e.props.severity === "warning" && !e.props.plain
        },
        // Help
        {
          "hover:bg-purple-600 dark:hover:bg-purple-300 hover:ring-purple-600 dark:hover:ring-purple-300": e.props.severity === "help" && !e.props.text && !e.props.outlined && !e.props.plain
        },
        {
          "focus:ring-purple-500 dark:focus:ring-purple-400": e.props.severity === "help"
        },
        // Text & Outlined Button
        {
          "hover:bg-purple-300/20": (e.props.text || e.props.outlined) && e.props.severity === "help" && !e.props.plain
        },
        // Warning
        {
          "hover:bg-red-600 dark:hover:bg-red-300 hover:ring-red-600 dark:hover:ring-red-300": e.props.severity === "danger" && !e.props.text && !e.props.outlined && !e.props.plain
        },
        {
          "focus:ring-red-500 dark:focus:ring-red-400": e.props.severity === "danger"
        },
        // Text & Outlined Button
        {
          "hover:bg-red-300/20": (e.props.text || e.props.outlined) && e.props.severity === "danger" && !e.props.plain
        },
        // Transitions
        "transition duration-200 ease-in-out",
        // Misc
        "cursor-pointer overflow-hidden select-none"
      ]
    }),
    icon: {
      class: [
        // Margins
        "mr-2"
      ]
    }
  },
  menubutton: {
    root: ({ parent: e }) => ({
      class: [
        "relative",
        // Alignments
        "items-center inline-flex text-center align-bottom justify-center",
        // Sizes & Spacing
        "text-sm",
        {
          "px-2.5 py-1.5 min-w-[2rem]": e.props.size === null && e.props.label !== null,
          "px-2 py-1": e.props.size === "small",
          "px-3 py-2": e.props.size === "large"
        },
        {
          "h-8 w-8 p-0": e.props.label == null
        },
        "ml-[1px]",
        // Shape
        "rounded-l-none",
        {
          "rounded-l-full": e.props.rounded
        },
        {
          "rounded-md": !e.props.rounded,
          "rounded-full": e.props.rounded
        },
        // Link Button
        {
          "text-primary-600 bg-transparent ring-transparent": e.props.link
        },
        // Plain Button
        {
          "text-white bg-gray-500 ring-1 ring-gray-500": e.props.plain && !e.props.outlined && !e.props.text
        },
        // Plain Text Button
        {
          "text-surface-500": e.props.plain && e.props.text
        },
        // Plain Outlined Button
        {
          "text-surface-500 ring-1 ring-gray-500": e.props.plain && e.props.outlined
        },
        // Text Button
        {
          "bg-transparent ring-transparent": e.props.text && !e.props.plain
        },
        // Outlined Button
        {
          "bg-transparent": e.props.outlined && !e.props.plain
        },
        // --- Severity Buttons ---
        // Primary Button
        {
          "text-white dark:text-surface-900": !e.props.link && e.props.severity === null && !e.props.text && !e.props.outlined && !e.props.plain,
          "bg-primary-500 dark:bg-primary-400": !e.props.link && e.props.severity === null && !e.props.text && !e.props.outlined && !e.props.plain,
          "ring-1 ring-primary-500 dark:ring-primary-400": !e.props.link && e.props.severity === null && !e.props.text && !e.props.outlined && !e.props.plain
        },
        // Primary Text Button
        {
          "text-primary-500 dark:text-primary-400": e.props.text && e.props.severity === null && !e.props.plain
        },
        // Primary Outlined Button
        {
          "text-primary-500 ring-1 ring-primary-500 hover:bg-primary-300/20": e.props.outlined && e.props.severity === null && !e.props.plain
        },
        // Secondary Button
        {
          "text-white dark:text-surface-900": e.props.severity === "secondary" && !e.props.text && !e.props.outlined && !e.props.plain,
          "bg-surface-500 dark:bg-surface-400": e.props.severity === "secondary" && !e.props.text && !e.props.outlined && !e.props.plain,
          "ring-1 ring-surface-500 dark:ring-surface-400": e.props.severity === "secondary" && !e.props.text && !e.props.outlined && !e.props.plain
        },
        // Secondary Text Button
        {
          "text-surface-500 dark:text-surface-400": e.props.text && e.props.severity === "secondary" && !e.props.plain
        },
        // Secondary Outlined Button
        {
          "text-surface-500 ring-1 ring-surface-500 hover:bg-surface-300/20": e.props.outlined && e.props.severity === "secondary" && !e.props.plain
        },
        // Success Button
        {
          "text-white dark:text-surface-900": e.props.severity === "success" && !e.props.text && !e.props.outlined && !e.props.plain,
          "bg-green-500 dark:bg-green-400": e.props.severity === "success" && !e.props.text && !e.props.outlined && !e.props.plain,
          "ring-1 ring-green-500 dark:ring-green-400": e.props.severity === "success" && !e.props.text && !e.props.outlined && !e.props.plain
        },
        // Success Text Button
        {
          "text-surface-500 dark:text-surface-400": e.props.text && e.props.severity === "secondary" && !e.props.plain
        },
        // Success Outlined Button
        {
          "text-green-500 ring-1 ring-green-500 hover:bg-green-300/20": e.props.outlined && e.props.severity === "success" && !e.props.plain
        },
        // Info Button
        {
          "text-white dark:text-surface-900": e.props.severity === "info" && !e.props.text && !e.props.outlined && !e.props.plain,
          "bg-blue-500 dark:bg-blue-400": e.props.severity === "info" && !e.props.text && !e.props.outlined && !e.props.plain,
          "ring-1 ring-blue-500 dark:ring-blue-400": e.props.severity === "info" && !e.props.text && !e.props.outlined && !e.props.plain
        },
        // Info Text Button
        {
          "text-blue-500 dark:text-blue-400": e.props.text && e.props.severity === "info" && !e.props.plain
        },
        // Info Outlined Button
        {
          "text-blue-500 ring-1 ring-blue-500 hover:bg-blue-300/20 ": e.props.outlined && e.props.severity === "info" && !e.props.plain
        },
        // Warning Button
        {
          "text-white dark:text-surface-900": e.props.severity === "warning" && !e.props.text && !e.props.outlined && !e.props.plain,
          "bg-orange-500 dark:bg-orange-400": e.props.severity === "warning" && !e.props.text && !e.props.outlined && !e.props.plain,
          "ring-1 ring-orange-500 dark:ring-orange-400": e.props.severity === "warning" && !e.props.text && !e.props.outlined && !e.props.plain
        },
        // Warning Text Button
        {
          "text-orange-500 dark:text-orange-400": e.props.text && e.props.severity === "warning" && !e.props.plain
        },
        // Warning Outlined Button
        {
          "text-orange-500 ring-1 ring-orange-500 hover:bg-orange-300/20": e.props.outlined && e.props.severity === "warning" && !e.props.plain
        },
        // Help Button
        {
          "text-white dark:text-surface-900": e.props.severity === "help" && !e.props.text && !e.props.outlined && !e.props.plain,
          "bg-purple-500 dark:bg-purple-400": e.props.severity === "help" && !e.props.text && !e.props.outlined && !e.props.plain,
          "ring-1 ring-purple-500 dark:ring-purple-400": e.props.severity === "help" && !e.props.text && !e.props.outlined && !e.props.plain
        },
        // Help Text Button
        {
          "text-purple-500 dark:text-purple-400": e.props.text && e.props.severity === "help" && !e.props.plain
        },
        // Help Outlined Button
        {
          "text-purple-500 ring-1 ring-purple-500 hover:bg-purple-300/20": e.props.outlined && e.props.severity === "help" && !e.props.plain
        },
        // Danger Button
        {
          "text-white dark:text-surface-900": e.props.severity === "danger" && !e.props.text && !e.props.outlined && !e.props.plain,
          "bg-red-500 dark:bg-red-400": e.props.severity === "danger" && !e.props.text && !e.props.outlined && !e.props.plain,
          "ring-1 ring-red-500 dark:ring-red-400": e.props.severity === "danger" && !e.props.text && !e.props.outlined && !e.props.plain
        },
        // Danger Text Button
        {
          "text-red-500 dark:text-red-400": e.props.text && e.props.severity === "danger" && !e.props.plain
        },
        // Danger Outlined Button
        {
          "text-red-500 ring-1 ring-red-500 hover:bg-red-300/20": e.props.outlined && e.props.severity === "danger" && !e.props.plain
        },
        // --- Severity Button States ---
        "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-offset-current",
        {
          "focus:ring-offset-2": !e.props.link && !e.props.plain && !e.props.outlined && !e.props.text
        },
        // Link
        {
          "focus:ring-primary-500 dark:focus:ring-primary-400": e.props.link
        },
        // Plain
        {
          "hover:bg-gray-600 hover:ring-gray-600": e.props.plain && !e.props.outlined && !e.props.text
        },
        // Text & Outlined Button
        {
          "hover:bg-surface-300/20": e.props.plain && (e.props.text || e.props.outlined)
        },
        // Primary
        {
          "hover:bg-primary-600 dark:hover:bg-primary-300 hover:ring-primary-600 dark:hover:ring-primary-300": !e.props.link && e.props.severity === null && !e.props.text && !e.props.outlined && !e.props.plain
        },
        {
          "focus:ring-primary-500 dark:focus:ring-primary-400": e.props.severity === null
        },
        // Text & Outlined Button
        {
          "hover:bg-primary-300/20": (e.props.text || e.props.outlined) && e.props.severity === null && !e.props.plain
        },
        // Secondary
        {
          "hover:bg-surface-600 dark:hover:bg-surface-300 hover:ring-surface-600 dark:hover:ring-surface-300": e.props.severity === "secondary" && !e.props.text && !e.props.outlined && !e.props.plain
        },
        {
          "focus:ring-surface-500 dark:focus:ring-surface-400": e.props.severity === "secondary"
        },
        // Text & Outlined Button
        {
          "hover:bg-surface-300/20": (e.props.text || e.props.outlined) && e.props.severity === "secondary" && !e.props.plain
        },
        // Success
        {
          "hover:bg-green-600 dark:hover:bg-green-300 hover:ring-green-600 dark:hover:ring-green-300": e.props.severity === "success" && !e.props.text && !e.props.outlined && !e.props.plain
        },
        {
          "focus:ring-green-500 dark:focus:ring-green-400": e.props.severity === "success"
        },
        // Text & Outlined Button
        {
          "hover:bg-green-300/20": (e.props.text || e.props.outlined) && e.props.severity === "success" && !e.props.plain
        },
        // Info
        {
          "hover:bg-blue-600 dark:hover:bg-blue-300 hover:ring-blue-600 dark:hover:ring-blue-300": e.props.severity === "info" && !e.props.text && !e.props.outlined && !e.props.plain
        },
        {
          "focus:ring-blue-500 dark:focus:ring-blue-400": e.props.severity === "info"
        },
        // Text & Outlined Button
        {
          "hover:bg-blue-300/20": (e.props.text || e.props.outlined) && e.props.severity === "info" && !e.props.plain
        },
        // Warning
        {
          "hover:bg-orange-600 dark:hover:bg-orange-300 hover:ring-orange-600 dark:hover:ring-orange-300": e.props.severity === "warning" && !e.props.text && !e.props.outlined && !e.props.plain
        },
        {
          "focus:ring-orange-500 dark:focus:ring-orange-400": e.props.severity === "warning"
        },
        // Text & Outlined Button
        {
          "hover:bg-orange-300/20": (e.props.text || e.props.outlined) && e.props.severity === "warning" && !e.props.plain
        },
        // Help
        {
          "hover:bg-purple-600 dark:hover:bg-purple-300 hover:ring-purple-600 dark:hover:ring-purple-300": e.props.severity === "help" && !e.props.text && !e.props.outlined && !e.props.plain
        },
        {
          "focus:ring-purple-500 dark:focus:ring-purple-400": e.props.severity === "help"
        },
        // Text & Outlined Button
        {
          "hover:bg-purple-300/20": (e.props.text || e.props.outlined) && e.props.severity === "help" && !e.props.plain
        },
        // Warning
        {
          "hover:bg-red-600 dark:hover:bg-red-300 hover:ring-red-600 dark:hover:ring-red-300": e.props.severity === "danger" && !e.props.text && !e.props.outlined && !e.props.plain
        },
        {
          "focus:ring-red-500 dark:focus:ring-red-400": e.props.severity === "danger"
        },
        // Text & Outlined Button
        {
          "hover:bg-red-300/20": (e.props.text || e.props.outlined) && e.props.severity === "danger" && !e.props.plain
        },
        // Transitions
        "transition duration-200 ease-in-out",
        // Misc
        "cursor-pointer overflow-hidden select-none"
      ]
    }),
    label: {
      class: ["hidden"]
    }
  }
}, He = {
  root: {
    class: "relative"
  },
  menu: {
    class: "p-0 m-0 list-none flex justify-center"
  },
  menuitem: {
    class: [
      // Flexbox and Position
      "relative",
      "flex",
      "justify-center"
    ]
  },
  action: ({ props: e, context: r, state: t }) => ({
    class: [
      // Flexbox
      "inline-flex items-start relative",
      "flex-col",
      // Transitions and Shape
      "transition-shadow",
      "rounded-md",
      // Spacing
      {
        "pr-4 min-[576px]:pr-32 md:pr-40": e.model.length !== r.index + 1
      },
      // Colors
      "bg-surface-0",
      "dark:bg-transparent",
      // Misc
      {
        "cursor-pointer": !e.readonly
      },
      // After
      "after:border-t-2",
      {
        "after:border-surface-200 after:dark:border-surface-700": t.d_activeStep <= r.index
      },
      {
        "after:border-primary-500 after:dark:border-primary-400": t.d_activeStep > r.index
      },
      "after:w-full",
      "after:absolute",
      "after:top-1/2",
      "after:left-0",
      "after:transform",
      "after:-mt-3",
      {
        "after:hidden": e.model.length == r.index + 1
      }
    ]
  }),
  step: ({ context: e, props: r, state: t }) => ({
    class: [
      // Flexbox
      "flex items-center justify-center",
      // Position
      "z-40",
      // Shape
      "rounded-full",
      "border-2",
      // Size
      "w-[2rem]",
      "h-[2rem]",
      "text-sm",
      "leading-[2rem]",
      // Colors
      {
        "text-surface-400 dark:text-white/60": !e.active && t.d_activeStep < e.index,
        "border-surface-100 dark:border-surface-700": !e.active && t.d_activeStep < e.index,
        "bg-surface-0 dark:bg-surface-800": t.d_activeStep <= e.index
      },
      {
        "border-primary-500 dark:border-primary-400": e.active,
        "text-primary-500 dark:text-primary-400": e.active
      },
      {
        "bg-primary-500 dark:bg-primary-400": t.d_activeStep > e.index,
        "text-surface-0 dark:text-surface-900": t.d_activeStep > e.index,
        "border-primary-500 dark:border-primary-400": t.d_activeStep > e.index
      },
      // States
      {
        "hover:border-surface-300 dark:hover:border-surface-500": !e.active && !r.readonly
      },
      // Transition
      "transition-colors duration-200 ease-in-out"
    ]
  }),
  label: ({ context: e }) => ({
    class: [
      "relative",
      // Font
      "text-sm leading-none",
      {
        "font-medium": e.active
      },
      // Display
      "block",
      // Spacing
      "mt-2",
      // Colors
      {
        "text-surface-400 dark:text-white/60": !e.active,
        "text-surface-800 dark:text-white/80": e.active
      },
      // Text and Overflow
      "whitespace-nowrap",
      "overflow-ellipsis",
      "max-w-full"
    ]
  })
}, We = {
  root: {
    class: "overflow-x-auto"
  },
  menu: {
    class: [
      // Flexbox
      "flex flex-1",
      // Spacing
      "list-none",
      "p-0 m-0",
      // Colors
      "bg-surface-0 dark:bg-surface-800",
      "border-b border-surface-200 dark:border-surface-700",
      "text-surface-900 dark:text-surface-0/80"
    ]
  },
  menuitem: {
    class: "mr-0"
  },
  action: ({ context: e, state: r }) => ({
    class: [
      "relative",
      // Font
      "font-medium",
      "text-md",
      // Flexbox and Alignment
      "flex items-center",
      // Spacing
      "py-4 px-3",
      "-mb-[1px]",
      // Shape
      "border-b-2",
      "rounded-t-md",
      // Colors and Conditions
      {
        "border-surface-200 dark:border-surface-700": r.d_activeIndex !== e.index,
        "bg-surface-0 dark:bg-surface-800": r.d_activeIndex !== e.index,
        "text-surface-700 dark:text-surface-0/80": r.d_activeIndex !== e.index,
        "bg-surface-0 dark:bg-surface-800": r.d_activeIndex === e.index,
        "border-primary-500 dark:border-primary-400": r.d_activeIndex === e.index,
        "text-primary-500 dark:text-primary-400": r.d_activeIndex === e.index
      },
      // States
      "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-inset",
      "focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      {
        "hover:bg-surface-0 dark:hover:bg-surface-800/80": r.d_activeIndex !== e.index,
        "hover:border-surface-400 dark:hover:border-surface-600": r.d_activeIndex !== e.index,
        "hover:text-surface-900 dark:hover:text-surface-0": r.d_activeIndex !== e.index
      },
      // Transitions
      "transition-all duration-200",
      // Misc
      "cursor-pointer select-none text-decoration-none",
      "overflow-hidden",
      "user-select-none",
      "whitespace-nowrap"
    ]
  }),
  icon: {
    class: "mr-2"
  }
}, Ue = {
  navContainer: ({ props: e }) => ({
    class: [
      // Position
      "relative",
      // Misc
      {
        "overflow-hidden": e.scrollable
      }
    ]
  }),
  navContent: {
    class: [
      // Overflow and Scrolling
      "overflow-y-hidden overscroll-contain",
      "overscroll-auto",
      "scroll-smooth",
      "[&::-webkit-scrollbar]:hidden"
    ]
  },
  previousButton: {
    class: [
      // Flexbox and Alignment
      "flex items-center justify-center",
      // Position
      "!absolute",
      "top-0 left-0",
      "z-20",
      // Size and Shape
      "h-full w-12",
      "rounded-none",
      // Colors
      "bg-surface-0 dark:bg-surface-800",
      "text-primary-500 dark:text-primary-400",
      "shadow-md"
    ]
  },
  nextButton: {
    class: [
      // Flexbox and Alignment
      "flex items-center justify-center",
      // Position
      "!absolute",
      "top-0 right-0",
      "z-20",
      // Size and Shape
      "h-full w-12",
      "rounded-none",
      // Colors
      "bg-surface-0 dark:bg-surface-800",
      "text-primary-500 dark:text-primary-400",
      "shadow-md"
    ]
  },
  nav: {
    class: [
      // Flexbox
      "flex flex-1",
      // Spacing
      "list-none",
      "p-0 m-0",
      // Colors
      "bg-surface-0 dark:bg-surface-800",
      "border-b border-surface-200 dark:border-surface-700",
      "text-surface-900 dark:text-surface-0/80"
    ]
  },
  tabpanel: {
    header: ({ props: e }) => ({
      class: [
        // Spacing
        "mr-0",
        // Misc
        {
          "opacity-60 cursor-default user-select-none select-none pointer-events-none": e == null ? void 0 : e.disabled
        }
      ]
    }),
    headerAction: ({ parent: e, context: r }) => ({
      class: [
        "relative",
        // Font
        "font-medium",
        "text-md",
        // Flexbox and Alignment
        "flex items-center",
        // Spacing
        "py-4 px-3",
        "-mb-[1px]",
        // Shape
        "border-b-2",
        "rounded-t-md",
        // Colors and Conditions
        {
          "border-surface-200 dark:border-surface-700": e.state.d_activeIndex !== r.index,
          "bg-surface-0 dark:bg-surface-800": e.state.d_activeIndex !== r.index,
          "text-surface-700 dark:text-surface-0/80": e.state.d_activeIndex !== r.index,
          "bg-surface-0 dark:bg-surface-800": e.state.d_activeIndex === r.index,
          "border-primary-500 dark:border-primary-400": e.state.d_activeIndex === r.index,
          "text-primary-500 dark:text-primary-400": e.state.d_activeIndex === r.index
        },
        // States
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-inset",
        "focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
        {
          "hover:bg-surface-0 dark:hover:bg-surface-800/80": e.state.d_activeIndex !== r.index,
          "hover:border-surface-400 dark:hover:border-surface-600": e.state.d_activeIndex !== r.index,
          "hover:text-surface-900 dark:hover:text-surface-0": e.state.d_activeIndex !== r.index
        },
        // Transitions
        "transition-all duration-200",
        // Misc
        "cursor-pointer select-none text-decoration-none",
        "overflow-hidden",
        "user-select-none",
        "whitespace-nowrap"
      ]
    }),
    headerTitle: {
      class: [
        // Text
        "leading-none",
        "whitespace-nowrap"
      ]
    },
    content: {
      class: [
        // Spacing
        "p-6",
        // Shape
        "rounded-b-md",
        // Colors
        "bg-surface-0 dark:bg-surface-800",
        "text-surface-700 dark:text-surface-0/80",
        "border-0"
      ]
    }
  }
}, Ye = {
  root: ({ props: e }) => ({
    class: [
      //Font
      "text-xs font-bold",
      //Alignments
      "inline-flex items-center justify-center",
      //Spacing
      "px-2 py-1",
      //Shape
      {
        "rounded-md": !e.rounded,
        "rounded-full": e.rounded
      },
      //Colors
      "text-white dark:text-surface-900",
      {
        "bg-primary-500 dark:bg-primary-400": e.severity == null || e.severity == "primary",
        "bg-green-500 dark:bg-green-400": e.severity == "success",
        "bg-blue-500 dark:bg-blue-400": e.severity == "info",
        "bg-orange-500 dark:bg-orange-400": e.severity == "warning",
        "bg-red-500 dark:bg-red-400": e.severity == "danger"
      }
    ]
  }),
  value: {
    class: "leading-normal"
  },
  icon: {
    class: "mr-1 text-sm"
  }
}, $e = {
  root: {
    class: [
      // Spacing
      "p-5",
      // Shape
      "rounded-md",
      // Color
      "bg-surface-900 text-white",
      "border border-surface-700",
      // Sizing & Overflow
      "h-72 overflow-auto"
    ]
  },
  container: {
    class: [
      // Flexbox
      "flex items-center"
    ]
  },
  prompt: {
    class: [
      // Color
      "text-surface-400"
    ]
  },
  response: {
    class: [
      // Color
      "text-primary-400"
    ]
  },
  command: {
    class: [
      // Color
      "text-primary-400"
    ]
  },
  commandtext: {
    class: [
      // Flexbox
      "flex-1 shrink grow-0",
      // Shape
      "border-0",
      // Spacing
      "p-0",
      // Color
      "bg-transparent text-inherit",
      // Outline
      "outline-none"
    ]
  }
}, Je = {
  root: ({ context: e }) => ({
    class: [
      // Font
      "font-sans leading-6",
      "sm:text-sm",
      // Spacing
      "m-0",
      "py-1.5 px-3",
      // Shape
      "rounded-md",
      "appearance-none",
      // Colors
      "text-surface-900 dark:text-surface-0",
      "placeholder:text-surface-400 dark:placeholder:text-surface-500",
      "bg-surface-0 dark:bg-surface-900",
      "ring-1 ring-inset ring-surface-300 dark:ring-surface-700 ring-offset-0",
      "shadow-sm",
      // States
      {
        "outline-none focus:ring-primary-500 dark:focus:ring-primary-400": !e.disabled,
        "opacity-60 select-none pointer-events-none cursor-default": e.disabled
      },
      // Misc
      "appearance-none",
      "transition-colors duration-200"
    ]
  })
}, qe = {
  root: {
    class: [
      // Sizing and Shape
      "rounded-md",
      // Colors
      "bg-white shadow-lg dark:bg-surface-700",
      "text-surface-700 dark:text-white/80",
      "ring-1 ring-surface-200 dark:ring-surface-700"
    ]
  },
  menu: {
    class: [
      // Spacings and Shape
      "list-none",
      "m-0",
      "p-0",
      "outline-none"
    ]
  },
  menuitem: {
    class: [
      "first:border-t-0 border-t border-gray-b",
      "first:rounded-tr-md first:rounded-tl-md last:rounded-br-md last:rounded-bl-md",
      // Hides the selection rectangle corner overflow for first/last
      "overflow-hidden"
    ]
  },
  content: ({ context: e }) => ({
    class: [
      // Colors
      {
        "text-black dark:text-surface-0": !e.focused,
        "bg-gray-200 text-black dark:bg-surface-300/10 dark:text-primary-400": e.focused
      },
      // Transitions
      "transition-shadow",
      "duration-200",
      // States
      "hover:text-black dark:hover:text-primary-400",
      "hover:bg-sky-200 dark:hover:bg-surface-400/10"
    ]
  }),
  action: {
    class: [
      "relative",
      // Font
      "font-medium",
      // Flexbox
      "flex",
      "items-center",
      // Spacing
      "px-2 py-1.5",
      // Misc
      "no-underline",
      "overflow-hidden",
      "cursor-pointer",
      "select-none"
    ]
  },
  icon: {
    class: [
      // Spacing
      "mr-2",
      "text-xs"
    ]
  },
  label: {
    class: ["text-xs"]
  },
  submenuicon: {
    class: [
      // Position
      "ml-auto"
    ]
  },
  submenu: {
    class: [
      "rounded-md",
      // Spacing
      "p-0",
      "ml-1",
      "list-none",
      // Shape
      "shadow-none sm:shadow-md",
      "border-0",
      // Position
      "static sm:absolute",
      "z-10",
      // Color
      "bg-white dark:bg-surface-700"
    ]
  },
  separator: {
    class: "border-t border-surface-200 dark:border-surface-600 my-1"
  }
}, Qe = {
  root: ({ props: e }) => ({
    class: [
      //Size and Shape
      "w-96 rounded-md",
      // Positioning
      {
        "-translate-x-2/4": e.position == "top-center" || e.position == "bottom-center"
      }
    ]
  }),
  container: ({ props: e }) => ({
    class: [
      "my-4 rounded-md w-full",
      "shadow-lg",
      "bg-surface-0 dark:bg-surface-800",
      "ring-1 ring-inset ring-surface-200 dark:ring-surface-700 ring-offset-0",
      // Colors
      {
        "text-blue-500 dark:text-blue-300": e.message.severity == "info",
        "text-green-500 dark:text-green-300": e.message.severity == "success",
        "text-orange-500 dark:text-orange-300": e.message.severity == "warn",
        "text-red-500 dark:text-red-300": e.message.severity == "error"
      }
    ]
  }),
  content: {
    class: "flex items-start p-4"
  },
  icon: {
    class: [
      // Sizing and Spacing
      "w-5 h-5",
      "mr-2 shrink-0"
    ]
  },
  text: {
    class: [
      // Font and Text
      "text-sm leading-none",
      "ml-2",
      "flex-1"
    ]
  },
  summary: {
    class: "font-medium block"
  },
  detail: {
    class: "mt-1.5 block text-surface-600 dark:text-surface-0/70"
  },
  closebutton: {
    class: [
      // Flexbox
      "flex items-center justify-center",
      // Size
      "w-6 h-6",
      // Spacing and Misc
      "ml-auto relative",
      // Shape
      "rounded-full",
      // Colors
      "bg-transparent",
      "text-surface-700 dark:text-surface-0/80",
      // Transitions
      "transition duration-200 ease-in-out",
      // States
      "hover:bg-surface-100 dark:hover:bg-surface-700",
      "outline-none focus:ring-1 focus:ring-inset",
      "focus:ring-primary-500 dark:focus:ring-primary-400",
      // Misc
      "overflow-hidden"
    ]
  },
  closeicon: {
    class: [
      // Sizing and Spacing
      "w-3 h-3",
      "shrink-0"
    ]
  },
  transition: {
    enterFromClass: "opacity-0 translate-y-2/4",
    enterActiveClass: "transition-[transform,opacity] duration-300",
    leaveFromClass: "max-h-[1000px]",
    leaveActiveClass: "!transition-[max-height_.45s_cubic-bezier(0,1,0,1),opacity_.3s,margin-bottom_.3s] overflow-hidden",
    leaveToClass: "max-h-0 opacity-0 mb-0"
  }
}, Ke = {
  root: ({ props: e, context: r }) => ({
    class: [
      // Alignments
      "items-center inline-flex text-center align-bottom justify-center",
      // Sizes & Spacing
      "px-2.5 py-1.5",
      "text-sm",
      // Shapes
      "rounded-md shadow-sm",
      // Colors
      "text-surface-700 dark:text-white/80",
      {
        "ring-1 ring-surface-200 dark:ring-surface-700": !r.focused
      },
      {
        "bg-surface-0 dark:bg-surface-900 ": !e.modelValue,
        "bg-surface-100 dark:bg-surface-700": e.modelValue
      },
      // States
      "hover:bg-surface-200 dark:hover:bg-surface-600/80",
      {
        "outline-none outline-offset-0 ring-2 ring-inset ring-primary-500 dark:ring-primary-400": r.focused && !e.disabled
      },
      // Transitions
      "transition-all duration-200",
      // Misc
      {
        "cursor-pointer": !e.disabled,
        "opacity-60 select-none pointer-events-none cursor-default": e.disabled
      }
    ]
  }),
  label: {
    class: "font-semibold text-center w-full"
  },
  icon: {
    class: [" mr-2", "text-surface-700 dark:text-white/80"]
  }
}, Ze = {
  root: {
    class: [
      // Flex & Alignment
      "flex items-center justify-between flex-wrap",
      "gap-6",
      // Spacing
      "px-6 py-2",
      "min-h-[4rem]",
      // Shape
      "rounded-md",
      "shadow-md",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "ring-1 ring-surface-100 dark:ring-surface-700"
    ]
  },
  start: {
    class: "flex items-center"
  },
  center: {
    class: "flex items-center"
  },
  end: {
    class: "flex items-center"
  }
}, Xe = {
  root: ({ context: e, props: r }) => ({
    class: [
      // Position
      "absolute",
      // Spacing
      {
        "px-1.5": (e == null ? void 0 : e.right) || (e == null ? void 0 : e.left) || !(e != null && e.right) && !(e != null && e.left) && !(e != null && e.top) && !(e != null && e.bottom),
        "py-1.5": (e == null ? void 0 : e.top) || (e == null ? void 0 : e.bottom)
      }
    ]
  }),
  arrow: {
    class: "hidden"
  },
  text: {
    class: [
      // Size
      "text-xs leading-none",
      // Spacing
      "p-2",
      // Shape
      "rounded-md",
      // Color
      "text-surface-900 dark:text-surface-0/80",
      "bg-surface-0 dark:bg-surface-900",
      "ring-1 ring-inset ring-surface-200 dark:ring-surface-800 ring-offset-0",
      // Misc
      "whitespace-pre-line",
      "break-words"
    ]
  }
}, er = {
  root: {
    class: [
      // Shape
      "rounded-md",
      // Color
      "bg-surface-0 dark:bg-surface-800",
      "text-surface-700 dark:text-white/80",
      "border-0 ring-1 ring-inset ring-gray-b dark:ring-surface-700 focus-visible:outline-none",
      "[&_[data-pc-name=pcfilter]]:w-full"
    ]
  },
  wrapper: {
    class: ["overflow-auto"]
  },
  container: {
    class: [
      // Spacing
      "m-0 p-0",
      // Misc
      "list-none overflow-auto"
    ]
  },
  node: {
    class: ["p-1", "text-sm", "rounded-md focus-visible:outline-none"]
  },
  nodeContent: ({ context: e, props: r }) => ({
    class: [
      // Flex and Alignment
      "flex items-center",
      // Shape
      "rounded-md",
      // Spacing
      "p-2 gap-2",
      // Colors
      "text-surface-600 dark:text-white/70",
      {
        "bg-sky-200 font-semibold": e.selected
      },
      // States
      {
        "hover:bg-surface-50 dark:hover:bg-surface-700/40": (r.selectionMode == "single" || r.selectionMode == "multiple") && !e.selected
      },
      // Transition
      "transition-shadow duration-200",
      {
        "cursor-pointer select-none": r.selectionMode == "single" || r.selectionMode == "multiple"
      }
    ]
  }),
  nodeToggleButton: ({ context: e }) => ({
    class: [
      // Flex and Alignment
      "inline-flex items-center justify-center",
      // Shape
      "border-0 rounded-full",
      // Size
      "size-6",
      // Colors
      "bg-transparent",
      {
        "text-surface-500 dark:text-white": !e.selected,
        "text-primary-600 dark:text-white": e.selected,
        "hidden pr-2": e.leaf
      },
      // States
      "hover:bg-surface-200/20 dark:hover:bg-surface-500/20",
      "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50",
      // Transition
      "transition duration-200",
      // Misc
      "cursor-pointer select-none"
    ]
  }),
  nodeIcon: ({ context: e }) => ({
    class: [
      // Space
      {
        hidden: e.leaf
      },
      "mr-2",
      // Color
      "text-surface-600 dark:text-white/70"
    ]
  }),
  nodeChildren: {
    class: ["m-0 list-none p-0 pl-2 mt-1"]
  },
  loadingIcon: {
    class: ["text-surface-500 dark:text-surface-0/70", "absolute top-[50%] right-[50%] -mt-2 -mr-2 animate-spin"]
  }
}, rr = {
  root: ({ props: e, state: r }) => ({
    class: [
      // Display and Position
      "inline-flex",
      "relative max-h-8",
      // Shape
      "rounded-md",
      // Color and Background
      "bg-surface-0 dark:bg-surface-900",
      "border",
      {
        "border-surface-300 dark:border-surface-600": !e.invalid
      },
      // Invalid State
      {
        "border-red-500 dark:border-red-400": e.invalid
      },
      // Transitions
      "transition-all",
      "duration-200",
      // States
      "ring-1 ring-inset ring-gray-b dark:ring-surface-700",
      // Misc
      "cursor-pointer",
      "select-none",
      {
        "opacity-60": e.disabled,
        "pointer-events-none": e.disabled,
        "cursor-default": e.disabled
      }
    ]
  }),
  labelContainer: {
    class: ["overflow-hidden flex flex-auto cursor-pointer"]
  },
  label: {
    class: [
      "block leading-[normal]",
      // Space
      "py-1.5 px-2 text-sm",
      // Color
      "text-surface-800 dark:text-white/80",
      // Transition
      "transition duration-200",
      // Misc
      "overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis"
    ]
  },
  dropdown: {
    class: [
      // Flexbox
      "flex items-center justify-center",
      "shrink-0",
      // Color and Background
      "bg-transparent",
      "text-surface-500",
      // Size
      "w-12",
      // Shape
      "rounded-tr-md",
      "rounded-br-md"
    ]
  },
  panel: {
    class: [
      // Position
      "absolute top-0 left-0",
      // Shape
      "border-0 dark:border",
      "rounded-md",
      "shadow-md",
      // Color
      "bg-white dark:bg-surface-800",
      "text-surface-800 dark:text-white/80",
      "dark:border-surface-700",
      "ring-1 ring-inset ring-gray-b dark:ring-surface-700"
    ]
  },
  treeContainer: {
    class: [
      // Sizing
      "max-h-[200px]",
      // Misc
      "overflow-auto"
    ]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, tr = {
  root: ({ props: e }) => ({
    class: [
      "relative",
      {
        "flex flex-col h-full": e.scrollHeight === "flex"
      },
      // Shape
      "border-spacing-0 border-separate"
    ]
  }),
  loadingoverlay: {
    class: [
      // Position
      "absolute",
      "top-0 left-0",
      "z-20",
      // Flex & Alignment
      "flex items-center justify-center",
      // Size
      "w-full h-full",
      // Color
      "bg-surface-100/40 dark:bg-surface-800/40",
      // Transition
      "transition duration-200"
    ]
  },
  loadingicon: {
    class: "w-8 h-8 animate-spin"
  },
  wrapper: ({ props: e }) => ({
    class: [
      // Overflow
      {
        "relative overflow-auto": e.scrollable,
        "overflow-x-auto": e.resizableColumns
      }
    ]
  }),
  header: ({ props: e }) => ({
    class: [
      "font-semibold",
      // Spacing
      "py-3.5 px-3",
      // Color
      "bg-surface-0 dark:bg-surface-800",
      "border-surface-300 dark:border-surface-600",
      "text-surface-700 dark:text-white/80"
    ]
  }),
  footer: {
    class: [
      "font-semibold",
      // Shape
      "border-t-0 border-t border-x-0",
      // Spacing
      "p-4",
      // Color
      "bg-surface-0 dark:bg-surface-800",
      "border-surface-200 dark:border-surface-700",
      "text-surface-700 dark:text-white/80"
    ]
  },
  table: {
    class: [
      // Table & Width
      "border-collapse table-fixed w-full "
    ]
  },
  thead: ({ props: e }) => ({
    class: [
      // Position & Z-index
      {
        "top-0 z-40 sticky": e.scrollable
      }
    ]
  }),
  tbody: ({ props: e }) => ({
    class: [{
      block: e.scrollable
    }]
  }),
  tfoot: ({ props: e }) => ({
    class: [
      // Block Display
      {
        block: e.scrollable
      }
    ]
  }),
  headerrow: ({ props: e }) => ({
    class: [
      // Flexbox & Width
      {
        "flex flex-nowrap w-full": e.scrollable
      }
    ]
  }),
  row: ({ context: e, props: r }) => ({
    class: [
      // Flex
      {
        "flex flex-nowrap w-full": e.scrollable
      },
      // Color
      "dark:text-white/80",
      {
        "bg-sky-200": e.selected
      },
      {
        "bg-surface-0 text-surface-600 dark:bg-surface-800": !e.selected
      },
      {
        "hover:bg-sky-100 hover:text-slate-900": e.selectable && !e.selected
      },
      "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-primary-500 ring-inset dark:focus:ring-primary-400",
      // Transition
      {
        "transition duration-200": r.selectionMode && !e.selected || r.rowHover
      }
    ]
  }),
  headercell: ({ context: e, props: r }) => ({
    class: [
      "font-semibold",
      "text-sm",
      // Position
      {
        "sticky z-40": e.scrollable && e.scrollDirection === "both" && e.frozen
      },
      // Flex & Alignment
      {
        "flex flex-1 items-center": e.scrollable,
        "flex-initial shrink-0": e.scrollable && e.scrollDirection === "both" && !e.frozen
      },
      "text-left",
      // Shape
      {
        "border-r last:border-r-0": e == null ? void 0 : e.showGridlines
      },
      "border-0 border-b border-solid",
      // Spacing
      (e == null ? void 0 : e.size) === "small" ? "py-2.5 px-2" : (e == null ? void 0 : e.size) === "large" ? "py-5 px-4" : "py-3.5 px-3",
      // Color
      (r.sortable === "" || r.sortable) && e.sorted ? "text-primary-500" : "bg-surface-0 text-surface-700",
      (r.sortable === "" || r.sortable) && e.sorted ? "dark:text-primary-400" : "dark:text-white/80 dark:bg-surface-800",
      "border-surface-200 dark:border-surface-700 ",
      // States
      "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      // Transition
      {
        "transition duration-200": r.sortable === "" || r.sortable
      },
      // Misc
      {
        "overflow-hidden relative bg-clip-padding": e.resizable && !e.frozen
      }
    ]
  }),
  column: {
    headercell: ({ context: e, props: r }) => ({
      class: [
        "font-semibold",
        "text-xs",
        "uppercase",
        "group",
        // Position
        {
          "sticky z-40": e.scrollable && e.scrollDirection === "both" && e.frozen
        },
        // Flex & Alignment
        {
          "flex flex-1 items-center": e.scrollable,
          "flex-initial shrink-0": e.scrollable && e.scrollDirection === "both" && !e.frozen
        },
        "text-left",
        // Shape
        {
          "border-r last:border-r-0": e == null ? void 0 : e.showGridlines
        },
        "border-0 border-b border-t border-solid",
        "border-slate-400",
        // Spacing
        (e == null ? void 0 : e.size) === "small" ? "py-2.5 px-2" : (e == null ? void 0 : e.size) === "large" ? "py-5 px-4" : "py-3.5 px-3",
        // Color
        (r.sortable === "" || r.sortable) && e.sorted ? "text-sky-900 bg-sky-200" : "text-gray-700 bg-slate-300",
        // States
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
        // Transition
        {
          "transition duration-200": r.sortable === "" || r.sortable
        },
        // Misc
        {
          "overflow-hidden relative bg-clip-padding": e.resizable && !e.frozen
        }
      ]
    }),
    bodycell: ({ context: e }) => ({
      class: [
        // Position
        {
          sticky: e.scrollable && e.scrollDirection === "both" && e.frozen
        },
        // Font
        "text-sm",
        // Flex & Alignment
        {
          "flex flex-1 items-center": e.scrollable,
          "flex-initial shrink-0": e.scrollable && e.scrollDirection === "both" && !e.frozen
        },
        "text-left",
        // Shape
        "border-0 border-b border-solid",
        {
          "last:border-r-0 border-r border-b": e == null ? void 0 : e.showGridlines
        },
        // Color
        "border-surface-200 dark:border-surface-700",
        {
          "bg-surface-0 dark:bg-surface-800": !e.selected
        },
        "border-slate-400",
        // Spacing
        (e == null ? void 0 : e.size) === "small" ? "py-2.5 px-2" : (e == null ? void 0 : e.size) === "large" ? "py-5 px-4" : "py-3.5 px-3",
        // Misc
        "space-nowrap",
        {
          "cursor-pointer": e.selectable
        }
      ]
    }),
    bodyCellContent: "flex items-center gap-2",
    rowToggleButton: {
      class: [
        "relative",
        // Flex & Alignment
        "inline-flex items-center justify-center",
        "text-left align-middle",
        // Spacing
        "m-0 mr-2 p-0",
        // Size
        "w-8 h-8",
        // Shape
        "border-0 rounded-full",
        // Color
        "text-surface-500 dark:text-white/70",
        "bg-transparent",
        // States
        "hover:bg-surface-50 dark:hover:bg-surface-700",
        "focus-visible:outline-none focus-visible:outline-offset-0",
        "focus-visible:ring focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50",
        // Transition
        "transition duration-200",
        // Misc
        "overflow-hidden",
        "cursor-pointer select-none"
      ]
    },
    rowtoggler: {
      class: [
        "relative",
        // Flex & Alignment
        "inline-flex items-center justify-center",
        "text-left align-middle",
        // Spacing
        "m-0 mr-2 p-0",
        // Size
        "w-8 h-8",
        // Shape
        "border-0 rounded-full",
        // Color
        "text-surface-500 dark:text-white/70",
        "bg-transparent",
        // States
        "hover:bg-surface-50 dark:hover:bg-surface-700",
        "focus-visible:outline-none focus-visible:outline-offset-0",
        "focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
        // Transition
        "transition duration-200",
        // Misc
        "overflow-hidden",
        "cursor-pointer select-none"
      ]
    },
    sorticon: ({ context: e }) => ({
      class: ["ml-2 inline-block", e.sorted ? "fill-primary-700 dark:fill-white/80" : "fill-surface-700 dark:fill-white/70"]
    }),
    sortbadge: {
      class: [
        // Flex & Alignment
        "inline-flex items-center justify-center align-middle",
        // Shape
        "rounded-full",
        // Size
        "w-[1.143rem] leading-[1.143rem]",
        // Spacing
        "ml-2",
        // Color
        "text-primary-700 dark:text-white",
        "bg-primary-50 dark:bg-primary-400/30"
      ]
    },
    columnresizer: {
      class: [
        "block",
        // Position
        "absolute top-0 right-0",
        // Sizing
        "w-2 h-full",
        // Spacing
        "m-0 p-0",
        // Color
        "border border-transparent",
        // Misc
        "cursor-col-resize"
      ]
    },
    checkboxwrapper: {
      class: [
        "relative",
        // Flex & Alignment
        "inline-flex align-bottom",
        // Size
        "w-6 h-6",
        // Spacing
        "mr-2",
        // Misc
        "cursor-pointer select-none"
      ]
    },
    checkbox: ({ context: e }) => ({
      class: [
        // Flex & Alignment
        "flex items-center justify-center",
        // Shape
        "border-2 rounded-lg",
        // Size
        "w-6 h-6",
        // Color
        "text-surface-600",
        {
          "border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900": !e.checked,
          "border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400": e.checked
        },
        // States
        "focus:outline-none focus:outline-offset-0",
        {
          "ring ring-primary-400/50 dark:ring-primary-300/50": e.focused
        },
        // Transition
        "transition-colors duration-200",
        // Misc
        {
          "cursor-default opacity-60": e.disabled
        }
      ]
    }),
    checkboxicon: {
      class: [
        // Size
        "w-4 h-4",
        "text-base leading-none",
        // Color
        "text-white dark:text-surface-900",
        // Transition
        "transition-all duration-200"
      ]
    },
    transition: {
      enterFromClass: "opacity-0 scale-y-[0.8]",
      enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
      leaveActiveClass: "transition-opacity duration-100 ease-linear",
      leaveToClass: "opacity-0"
    }
  },
  resizehelper: {
    class: "absolute hidden w-[2px] z-20 bg-sky-500"
  }
}, ar = {
  root: {
    class: ["cursor-pointer inline-flex relative select-none align-bottom", "w-4 h-4"]
  },
  checkbox: ({ props: e, context: r }) => ({
    class: [
      "relative",
      // Alignment
      "flex",
      "items-center",
      "justify-center",
      // Size
      "w-4",
      "h-4",
      // Shape
      "rounded",
      "border",
      // Colors
      "text-surface-600",
      {
        "border-surface-300 bg-surface-0 dark:border-surface-700 dark:bg-surface-900": e.modelValue == null,
        "border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400": e.modelValue !== null
      },
      // States
      "focus:outline-none focus:outline-offset-0",
      {
        "ring-2 ring-primary-500 dark:ring-primary-400": !e.disabled && r.focused,
        "cursor-default opacity-60": e.disabled
      },
      // Transitions
      "transition-colors",
      "duration-200"
    ]
  }),
  checkicon: {
    class: [
      // Font
      "text-normal",
      // Size
      "w-3",
      "h-3",
      // Colors
      "text-white dark:text-surface-900",
      // Transitions
      "transition-all",
      "duration-200"
    ]
  },
  uncheckicon: {
    class: [
      // Font
      "text-normal",
      // Size
      "w-3",
      "h-3",
      // Colors
      "text-white dark:text-surface-900",
      // Transitions
      "transition-all",
      "duration-200"
    ]
  }
}, sr = {
  global: le,
  directives: {
    badge: G,
    ripple: Be,
    tooltip: Xe
  },
  //forms
  autocomplete: D,
  inputnumber: be,
  inputtext: me,
  calendar: U,
  checkbox: q,
  radiobutton: Le,
  inputswitch: ge,
  select: Pe,
  selectbutton: De,
  slider: Ve,
  chips: K,
  rating: _e,
  multiselect: we,
  togglebutton: Ke,
  cascadeselect: J,
  listbox: ye,
  colorpicker: Z,
  inputgroup: ue,
  inputgroupaddon: ce,
  inputmask: fe,
  knob: pe,
  treeselect: rr,
  tristatecheckbox: ar,
  textarea: Je,
  password: Se,
  //buttons
  button: W,
  splitbutton: Ge,
  //data
  paginator: Te,
  datatable: re,
  tree: er,
  dataview: te,
  dataviewlayoutoptions: ae,
  organizationchart: Ce,
  orderlist: ze,
  picklist: Me,
  treetable: tr,
  //panels
  accordion: P,
  panel: Ae,
  fieldset: ne,
  card: Y,
  tabview: Ue,
  divider: oe,
  toolbar: Ze,
  scrollpanel: Oe,
  //menu
  contextmenu: ee,
  menu: ve,
  menubar: xe,
  steps: He,
  tieredmenu: qe,
  breadcrumb: H,
  panelmenu: Ie,
  megamenu: he,
  dock: ie,
  tabmenu: We,
  //overlays
  dialog: se,
  overlaypanel: je,
  sidebar: Ee,
  confirmpopup: X,
  //messages
  message: ke,
  inlinemessage: de,
  toast: Qe,
  //media
  carousel: $,
  //misc
  badge: V,
  avatar: E,
  avatargroup: R,
  tag: Ye,
  chip: Q,
  progressbar: Fe,
  skeleton: Re,
  scrolltop: Ne,
  terminal: $e
}, nr = {
  install(e) {
    e.use(N, {
      unstyled: !0,
      pt: sr
    });
  }
};
export {
  nr as default
};
