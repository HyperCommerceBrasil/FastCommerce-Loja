import React from 'react';
import { Colors } from '../../utils';

type LogoProps = {
  color?: string;
  width?: number;
  height?: number;
};

export default ({
  color = Colors.light?.primary.main,
  width = 1694,
  height = 480,
}: LogoProps): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 1694 480"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M343.561 407.157C343.561 430.876 327.125 449.907 306.641 449.907C286.158 449.907 269.56 430.876 269.56 407.157C269.56 383.438 286.239 364.219 306.641 364.219C327.206 364.219 343.561 383.438 343.561 407.157ZM137.994 364.219C117.51 364.219 101.074 383.532 101.074 407.157C101.074 430.782 117.51 449.907 137.994 449.907C158.478 449.907 175.075 430.876 175.075 407.157C175.075 383.438 158.478 364.219 137.994 364.219ZM374.165 111.094C129.493 111.094 67.1506 99.0942 0.841309 18.0942C28.6928 66.563 43.995 157.688 302.917 153.282C572.769 148.594 408.17 234 360.239 330.375C511.399 174.094 618.838 111.094 374.165 111.094Z"
      fill={color}
    />
    <g clipPath="url(#clip0)">
      <line
        x1="174"
        y1="191"
        x2="346.012"
        y2="191"
        stroke={color}
        strokeWidth="30"
      />
      <line
        x1="145"
        y1="244"
        x2="346.01"
        y2="244"
        stroke={color}
        strokeWidth="30"
      />
      <line
        x1="96"
        y1="298"
        x2="346"
        y2="298"
        stroke={color}
        strokeWidth="30"
      />
    </g>
    <path
      d="M564.1 240V138H629.2V156H584.8V186H621.1V204H584.8V240H564.1ZM696.947 188.4V219.6C697.147 222 697.547 223.7 698.147 224.7C698.747 225.6 699.997 226.25 701.897 226.65L701.297 241.8C696.197 241.8 692.097 241.45 688.997 240.75C685.997 240.05 682.947 238.65 679.847 236.55C672.647 240.05 665.297 241.8 657.797 241.8C642.297 241.8 634.547 233.6 634.547 217.2C634.547 209.2 636.697 203.55 640.997 200.25C645.297 196.85 651.897 194.85 660.797 194.25L676.847 193.05V188.4C676.847 185.3 676.147 183.2 674.747 182.1C673.347 180.9 671.097 180.3 667.997 180.3L639.797 181.5L639.197 167.55C649.897 164.65 660.047 163.2 669.647 163.2C679.347 163.2 686.297 165.2 690.497 169.2C694.797 173.2 696.947 179.6 696.947 188.4ZM663.197 208.2C657.597 208.7 654.797 211.7 654.797 217.2C654.797 222.7 657.247 225.45 662.147 225.45C665.947 225.45 670.097 224.85 674.597 223.65L676.847 223.05V207L663.197 208.2ZM769.959 183.75C757.559 182.15 748.859 181.35 743.859 181.35C738.959 181.35 735.759 181.8 734.259 182.7C732.859 183.6 732.159 185.05 732.159 187.05C732.159 188.95 733.109 190.3 735.009 191.1C737.009 191.8 742.009 192.9 750.009 194.4C758.109 195.8 763.859 198.15 767.259 201.45C770.659 204.75 772.359 210.1 772.359 217.5C772.359 233.7 762.309 241.8 742.209 241.8C735.609 241.8 727.609 240.9 718.209 239.1L713.409 238.2L714.009 221.4C726.409 223 735.009 223.8 739.809 223.8C744.709 223.8 748.009 223.35 749.709 222.45C751.509 221.45 752.409 220 752.409 218.1C752.409 216.2 751.459 214.8 749.559 213.9C747.759 213 742.959 211.9 735.159 210.6C727.459 209.3 721.709 207.1 717.909 204C714.109 200.9 712.209 195.4 712.209 187.5C712.209 179.5 714.909 173.5 720.309 169.5C725.709 165.4 732.659 163.35 741.159 163.35C747.059 163.35 755.109 164.3 765.309 166.2L770.259 167.1L769.959 183.75ZM828.411 182.1H809.961V212.85C809.961 215.85 810.011 218 810.111 219.3C810.311 220.5 810.861 221.55 811.761 222.45C812.761 223.35 814.261 223.8 816.261 223.8L827.661 223.5L828.561 239.55C821.861 241.05 816.761 241.8 813.261 241.8C804.261 241.8 798.111 239.8 794.811 235.8C791.511 231.7 789.861 224.2 789.861 213.3V182.1H781.011V165H789.861V144.15H809.961V165H828.411V182.1ZM940.908 238.35C930.308 240.65 920.758 241.8 912.258 241.8C903.758 241.8 896.958 240.75 891.858 238.65C886.758 236.55 882.758 233.2 879.858 228.6C876.958 224 874.958 218.6 873.858 212.4C872.758 206.2 872.208 198.4 872.208 189C872.208 169.3 874.958 155.6 880.458 147.9C886.058 140.1 896.308 136.2 911.208 136.2C919.808 136.2 929.758 137.55 941.058 140.25L940.458 156.75C930.558 155.25 922.308 154.5 915.708 154.5C909.208 154.5 904.558 155.4 901.758 157.2C898.958 158.9 896.858 162.2 895.458 167.1C894.158 172 893.508 180.35 893.508 192.15C893.508 203.95 894.858 212.15 897.558 216.75C900.358 221.25 905.858 223.5 914.058 223.5C922.358 223.5 931.158 222.8 940.458 221.4L940.908 238.35ZM958.782 173.55C964.082 166.65 972.932 163.2 985.332 163.2C997.732 163.2 1006.58 166.65 1011.88 173.55C1017.18 180.35 1019.83 189.95 1019.83 202.35C1019.83 228.65 1008.33 241.8 985.332 241.8C962.332 241.8 950.832 228.65 950.832 202.35C950.832 189.95 953.482 180.35 958.782 173.55ZM974.232 219.3C976.332 222.9 980.032 224.7 985.332 224.7C990.632 224.7 994.282 222.9 996.282 219.3C998.382 215.7 999.432 210.05 999.432 202.35C999.432 194.65 998.382 189.05 996.282 185.55C994.282 182.05 990.632 180.3 985.332 180.3C980.032 180.3 976.332 182.05 974.232 185.55C972.232 189.05 971.232 194.65 971.232 202.35C971.232 210.05 972.232 215.7 974.232 219.3ZM1054.67 240H1034.57V165H1054.52V169.2C1061.42 165.2 1067.32 163.2 1072.22 163.2C1080.32 163.2 1086.57 165.55 1090.97 170.25C1100.17 165.55 1108.57 163.2 1116.17 163.2C1126.07 163.2 1132.92 166.1 1136.72 171.9C1140.62 177.6 1142.57 186.75 1142.57 199.35V240H1122.47V199.95C1122.47 193.55 1121.77 188.85 1120.37 185.85C1118.97 182.75 1116.17 181.2 1111.97 181.2C1108.77 181.2 1104.87 181.9 1100.27 183.3L1098.02 184.05C1098.42 191.55 1098.62 197.25 1098.62 201.15V240H1078.52V201.45C1078.52 194.05 1077.87 188.85 1076.57 185.85C1075.27 182.75 1072.42 181.2 1068.02 181.2C1064.12 181.2 1060.27 181.9 1056.47 183.3L1054.67 183.9V240ZM1180.5 240H1160.4V165H1180.35V169.2C1187.25 165.2 1193.15 163.2 1198.05 163.2C1206.15 163.2 1212.4 165.55 1216.8 170.25C1226 165.55 1234.4 163.2 1242 163.2C1251.9 163.2 1258.75 166.1 1262.55 171.9C1266.45 177.6 1268.4 186.75 1268.4 199.35V240H1248.3V199.95C1248.3 193.55 1247.6 188.85 1246.2 185.85C1244.8 182.75 1242 181.2 1237.8 181.2C1234.6 181.2 1230.7 181.9 1226.1 183.3L1223.85 184.05C1224.25 191.55 1224.45 197.25 1224.45 201.15V240H1204.35V201.45C1204.35 194.05 1203.7 188.85 1202.4 185.85C1201.1 182.75 1198.25 181.2 1193.85 181.2C1189.95 181.2 1186.1 181.9 1182.3 183.3L1180.5 183.9V240ZM1302.73 211.05C1302.83 215.65 1304.03 219 1306.33 221.1C1308.73 223.1 1312.13 224.1 1316.53 224.1C1325.83 224.1 1334.13 223.8 1341.43 223.2L1345.63 222.75L1345.93 237.6C1334.43 240.4 1324.03 241.8 1314.73 241.8C1303.43 241.8 1295.23 238.8 1290.13 232.8C1285.03 226.8 1282.48 217.05 1282.48 203.55C1282.48 176.65 1293.53 163.2 1315.63 163.2C1337.43 163.2 1348.33 174.5 1348.33 197.1L1346.83 211.05H1302.73ZM1328.53 195.75C1328.53 189.75 1327.58 185.6 1325.68 183.3C1323.78 180.9 1320.43 179.7 1315.63 179.7C1310.93 179.7 1307.58 180.95 1305.58 183.45C1303.68 185.85 1302.68 189.95 1302.58 195.75H1328.53ZM1362.69 240V165H1382.64V172.95C1391.04 167.95 1399.04 164.7 1406.64 163.2V183.45C1398.54 185.15 1391.59 186.9 1385.79 188.7L1382.79 189.75V240H1362.69ZM1446.55 163.2C1451.75 163.2 1458.4 164 1466.5 165.6L1470.55 166.5L1469.95 182.4C1462.05 181.6 1456.2 181.2 1452.4 181.2C1445.5 181.2 1440.9 182.7 1438.6 185.7C1436.4 188.6 1435.3 194.15 1435.3 202.35C1435.3 210.55 1436.4 216.2 1438.6 219.3C1440.9 222.3 1445.55 223.8 1452.55 223.8L1469.95 222.6L1470.55 238.65C1459.85 240.75 1451.7 241.8 1446.1 241.8C1435 241.8 1427 238.7 1422.1 232.5C1417.3 226.2 1414.9 216.15 1414.9 202.35C1414.9 188.55 1417.4 178.6 1422.4 172.5C1427.4 166.3 1435.45 163.2 1446.55 163.2ZM1501.36 211.05C1501.46 215.65 1502.66 219 1504.96 221.1C1507.36 223.1 1510.76 224.1 1515.16 224.1C1524.46 224.1 1532.76 223.8 1540.06 223.2L1544.26 222.75L1544.56 237.6C1533.06 240.4 1522.66 241.8 1513.36 241.8C1502.06 241.8 1493.86 238.8 1488.76 232.8C1483.66 226.8 1481.11 217.05 1481.11 203.55C1481.11 176.65 1492.16 163.2 1514.26 163.2C1536.06 163.2 1546.96 174.5 1546.96 197.1L1545.46 211.05H1501.36ZM1527.16 195.75C1527.16 189.75 1526.21 185.6 1524.31 183.3C1522.41 180.9 1519.06 179.7 1514.26 179.7C1509.56 179.7 1506.21 180.95 1504.21 183.45C1502.31 185.85 1501.31 189.95 1501.21 195.75H1527.16Z"
      fill={color}
    />
    <g clipPath="url(#clip1)">
      <path
        d="M1532.94 325.992L1471.84 265.995C1470.54 264.724 1468.72 264.004 1466.79 264.004H1426.05C1423.38 264.004 1420.95 265.395 1419.85 267.555C1418.76 269.727 1419.21 272.259 1421 274.011L1478.02 330L1421 385.977C1419.21 387.741 1418.75 390.273 1419.85 392.433C1420.95 394.604 1423.38 395.996 1426.05 395.996H1466.79C1468.72 395.996 1470.54 395.264 1471.84 394.017L1532.94 334.02C1535.26 331.74 1535.26 328.26 1532.94 325.992Z"
        fill={color}
      />
      <path
        d="M1444.68 325.992L1383.58 265.995C1382.28 264.724 1380.46 264.004 1378.53 264.004H1337.8C1335.12 264.004 1332.69 265.395 1331.59 267.555C1330.51 269.727 1330.95 272.259 1332.75 274.011L1389.76 330L1332.75 385.977C1330.95 387.741 1330.49 390.273 1331.59 392.433C1332.69 394.604 1335.12 395.996 1337.8 395.996H1378.53C1380.46 395.996 1382.28 395.264 1383.58 394.017L1444.68 334.02C1447.01 331.74 1447.01 328.26 1444.68 325.992Z"
        fill={color}
      />
    </g>
    <path d="M565 289H1285" stroke={color} strokeWidth="20" />
    <path d="M565 327H1285" stroke={color} strokeWidth="20" />
    <path d="M565 367H1285" stroke={color} strokeWidth="20" />
    <defs>
      <clipPath id="clip0">
        <rect
          width="339.234"
          height="480"
          fill="white"
          transform="translate(1)"
        />
      </clipPath>
      <clipPath id="clip1">
        <rect
          width="203.684"
          height="180"
          fill="white"
          transform="translate(1331 240)"
        />
      </clipPath>
    </defs>
  </svg>
);