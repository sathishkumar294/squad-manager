import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

export const BatsmanIcon = (props: Partial<CustomIconComponentProps>) => {
  const BatsmanSvg = () => (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="16px"
      height="16px"
      viewBox="0 0 768.000000 1280.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <metadata>
        Created by potrace 1.15, written by Peter Selinger 2001-2017
      </metadata>
      <g
        transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M2275 12783 c-49 -20 -112 -63 -142 -94 -12 -13 -497 -877 -1078
   -1919 l-1057 -1895 5 -83 c8 -138 72 -224 184 -251 44 -11 56 -10 107 10 32
   11 81 40 109 63 50 40 97 123 1099 1926 576 1037 1052 1902 1058 1923 16 57
   -2 169 -37 226 -54 87 -165 129 -248 94z"
        />
        <path
          d="M3620 11075 c-522 -99 -926 -492 -1029 -1003 -57 -279 -24 -552 99
   -809 67 -140 138 -240 250 -353 221 -222 504 -350 830 -375 84 -7 252 7 340
   27 447 102 801 420 945 850 104 311 82 657 -60 953 -167 347 -466 591 -845
   690 -91 24 -128 28 -280 31 -122 2 -198 -1 -250 -11z"
        />
        <path
          d="M346 7669 c-65 -15 -153 -69 -206 -125 -199 -211 -136 -546 126 -675
   l69 -34 1114 -5 1115 -5 617 -1070 618 -1070 -33 -35 c-18 -19 -822 -888
   -1786 -1930 -964 -1042 -1785 -1929 -1826 -1970 -40 -41 -86 -100 -102 -131
   -85 -162 -53 -359 77 -490 132 -132 320 -164 485 -83 48 23 308 262 1420 1299
   748 698 1611 1503 1916 1787 432 404 557 515 566 505 6 -6 551 -795 1210
   -1751 1113 -1615 1203 -1743 1257 -1783 216 -158 524 -83 647 157 28 55 50
   133 50 180 0 55 -28 150 -59 200 -15 26 -108 262 -206 525 -244 660 -519 1399
   -1020 2750 -409 1101 -1269 3424 -1301 3512 -33 91 -128 183 -232 225 l-57 23
   -2210 2 c-1311 0 -2226 -3 -2249 -8z"
        />
      </g>
    </svg>
  );

  return <Icon component={BatsmanSvg} size={64} {...props}></Icon>;
};
