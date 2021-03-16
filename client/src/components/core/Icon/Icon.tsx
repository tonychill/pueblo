import { FC } from "react";

interface IconProps {
  variant: string | "chevron" | "filter" | "arrow" | "house" | "yacht" | "car" | "map" | "logo" | "bell" | "bed";
  orientation?: "reverse" | "invert";
  width?: number;
  height?: number;
}
const Icon: FC<IconProps> = ({ variant, height = 16, width = 16 }) => {
  switch (variant) {
    case "chevron":
      return (
        <div>
          <div>Icon</div>
        </div>
      );
    case "filter":
      return (
        <svg id="Component_83_1" data-name="Component 83 – 1" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 33 33">
          <rect id="Rectangle_1098" data-name="Rectangle 1098" width={width} height={height} rx={6} fill="#f7f7f7" />
          <g id="Group_1380" data-name="Group 1380" transform="translate(19251.051 14733)">
            <g id="Rectangle_1096" data-name="Rectangle 1096" transform="translate(-19244.051 -14724)" fill="#fff" stroke="#000345" strokeWidth={1}>
              <rect width={18} height={2} rx={1} stroke="none" />
              <rect x="0.5" y="0.5" width={17} height={1} rx="0.5" fill="none" />
            </g>
            <g id="Rectangle_1097" data-name="Rectangle 1097" transform="translate(-19244.051 -14710)" fill="#fff" stroke="#000345" strokeWidth={1}>
              <rect width={18} height={2} rx={1} stroke="none" />
              <rect x="0.5" y="0.5" width={17} height={1} rx="0.5" fill="none" />
            </g>
            <g id="Ellipse_132" data-name="Ellipse 132" transform="translate(-19241.051 -14725)" fill="#fff" stroke="#000345" strokeWidth={1}>
              <circle cx={2} cy={2} r={2} stroke="none" />
              <circle cx={2} cy={2} r="1.5" fill="none" />
            </g>
            <g id="Ellipse_133" data-name="Ellipse 133" transform="translate(-19233.051 -14711)" fill="#fff" stroke="#000345" strokeWidth={1}>
              <circle cx={2} cy={2} r={2} stroke="none" />
              <circle cx={2} cy={2} r="1.5" fill="none" />
            </g>
          </g>
        </svg>
      );
    case "bed-sm":
      return (
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          // style={{ enableBackground: "new 0 0 512 512" }}
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                d="M482,233.539V117.007c0-49.626-40.374-90-90-90h-94.5c-5.523,0-10,4.477-10,10s4.477,10,10,10H392
              c38.598,0,70,31.402,70,70v106.005c-7.532-2.59-15.6-4.017-24-4.017h-2v-57.333c0-21.321-17.346-38.667-38.667-38.667H284.667
              c-11.358,0-21.586,4.924-28.667,12.747c-7.081-7.823-17.309-12.747-28.667-12.747H114.667C93.346,122.995,76,140.341,76,161.661
              v57.333h-2c-8.4,0-16.468,1.427-24,4.017V117.007c0-38.598,31.402-70,70-70h96.5c5.523,0,10-4.477,10-10s-4.477-10-10-10H120
              c-49.626,0-90,40.374-90,90v116.533c-18.188,13.495-30,35.12-30,59.456v128c0,5.523,4.477,10,10,10h20v44c0,5.523,4.477,10,10,10
              h54.012c5.523,0,10-4.477,10-10v-44h303.976v44c0,5.523,4.477,10,10,10H472c5.523,0,10-4.477,10-10v-44h20c5.523,0,10-4.477,10-10
              v-128C512,268.659,500.188,247.034,482,233.539z M266,161.661c0-10.293,8.374-18.667,18.667-18.667h112.667
              c10.293,0,18.667,8.374,18.667,18.667v57.333H266V161.661z M96,161.661c0-10.293,8.374-18.667,18.667-18.667h112.667
              c10.293,0,18.667,8.374,18.667,18.667v57.333H96V161.661z M84.012,464.995H50v-34h34.012V464.995z M462,464.995h-34.012v-34H462
              V464.995z M492,362.995H91.921c-5.523,0-10,4.477-10,10s4.477,10,10,10H492v28h-19.758c-0.081-0.002-0.16-0.012-0.242-0.012
              h-54.012c-0.082,0-0.161,0.01-0.242,0.012H94.254c-0.081-0.002-0.16-0.012-0.242-0.012H40c-0.082,0-0.161,0.01-0.242,0.012H20
              v-118c0-29.776,24.224-54,54-54h12h170h170h12c29.776,0,54,24.224,54,54V362.995z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M263.07,29.935c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21,1.07-7.07,2.93s-2.93,4.44-2.93,7.07s1.07,5.21,2.93,7.07
              s4.44,2.93,7.07,2.93s5.21-1.07,7.07-2.93s2.93-4.43,2.93-7.07C266,34.375,264.93,31.794,263.07,29.935z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M59.15,365.924c-1.86-1.86-4.44-2.93-7.07-2.93c-2.64,0-5.21,1.07-7.07,2.93s-2.93,4.44-2.93,7.07s1.07,5.21,2.93,7.07
              c1.86,1.86,4.44,2.93,7.07,2.93s5.21-1.07,7.07-2.93c1.86-1.86,2.93-4.44,2.93-7.07S61.01,367.784,59.15,365.924z"
              />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      );
    default:
      return (
        <div>
          <div>Icon</div>
        </div>
      );
  }
};

export default Icon;

/*** Notes ***
 * Notes go here.
 */
