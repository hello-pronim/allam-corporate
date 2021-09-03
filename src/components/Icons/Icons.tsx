import React from "react";
import styles from "./Icons.module.scss";

export interface IIconProps {
  type: string;
  className?: string;
  onClick?: () => void;
}

const Icon = ({ type, className, onClick, ...props }: IIconProps) => {
  return (
    <>
      {type === "easy-buy" && (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M52.5001 3.5C52.9001 3.5 20.0001 34.1667 3.50005 49.5C3.00005 49.5 2.00005 49.4 2.00005 49C2.00005 48.5 1.50005 7 2.00005 6.5C2.50005 6 3.00005 5 3.50005 4.5C3.90005 4.1 4.33339 3.33333 4.50005 3H8.00005C22.6667 3.16667 52.1001 3.5 52.5001 3.5Z"
            fill="#FFCB05"
          />
          <path
            d="M49.9333 56H28C27.5049 56 27.0301 55.8033 26.6801 55.4533C26.33 55.1032 26.1333 54.6284 26.1333 54.1333C26.1333 53.6383 26.33 53.1635 26.6801 52.8134C27.0301 52.4633 27.5049 52.2667 28 52.2667H49.9333C50.5522 52.2667 51.1457 52.0208 51.5833 51.5833C52.0208 51.1457 52.2667 50.5522 52.2667 49.9333V6.06667C52.2667 5.44783 52.0208 4.85434 51.5833 4.41675C51.1457 3.97917 50.5522 3.73333 49.9333 3.73333H6.06667C5.44783 3.73333 4.85434 3.97917 4.41675 4.41675C3.97917 4.85434 3.73333 5.44783 3.73333 6.06667V49.9333C3.73333 50.5522 3.97917 51.1457 4.41675 51.5833C4.85434 52.0208 5.44783 52.2667 6.06667 52.2667H16.3333C16.9522 52.2667 17.5457 52.0208 17.9832 51.5833C18.4208 51.1457 18.6667 50.5522 18.6667 49.9333V28C18.6667 27.5049 18.8633 27.0301 19.2134 26.6801C19.5635 26.33 20.0383 26.1333 20.5333 26.1333C21.0284 26.1333 21.5032 26.33 21.8533 26.6801C22.2033 27.0301 22.4 27.5049 22.4 28V49.9333C22.3951 51.5408 21.7543 53.081 20.6177 54.2177C19.481 55.3543 17.9408 55.9951 16.3333 56H6.06667C4.4592 55.9951 2.91898 55.3543 1.78232 54.2177C0.645669 53.081 0.00492336 51.5408 0 49.9333V6.06667C0.00492336 4.4592 0.645669 2.91898 1.78232 1.78232C2.91898 0.645669 4.4592 0.00492336 6.06667 0H49.9333C51.5408 0.00492336 53.081 0.645669 54.2177 1.78232C55.3543 2.91898 55.9951 4.4592 56 6.06667V49.9333C55.9951 51.5408 55.3543 53.081 54.2177 54.2177C53.081 55.3543 51.5408 55.9951 49.9333 56Z"
            fill="#393839"
          />
          <path
            d="M26.1331 37.3333C25.8433 37.3333 25.5575 37.2658 25.2983 37.1362C25.0391 37.0066 24.8136 36.8185 24.6397 36.5866L20.5331 31.1173L16.4264 36.5866C16.2793 36.7827 16.0951 36.948 15.8841 37.0729C15.6732 37.1977 15.4397 37.2799 15.1971 37.3145C14.9544 37.3492 14.7073 37.3357 14.4698 37.2749C14.2323 37.2141 14.0092 37.107 13.8131 36.96C13.617 36.8129 13.4517 36.6286 13.3269 36.4177C13.202 36.2068 13.1198 35.9733 13.0852 35.7306C13.0505 35.488 13.064 35.2408 13.1248 35.0034C13.1856 34.7659 13.2927 34.5427 13.4397 34.3466L19.0397 26.88C19.2136 26.6481 19.4391 26.46 19.6983 26.3304C19.9575 26.2008 20.2433 26.1333 20.5331 26.1333C20.8229 26.1333 21.1087 26.2008 21.3679 26.3304C21.6271 26.46 21.8525 26.6481 22.0264 26.88L27.6264 34.3466C27.9234 34.7427 28.051 35.2405 27.981 35.7306C27.911 36.2207 27.6491 36.6629 27.2531 36.96C26.93 37.2023 26.537 37.3333 26.1331 37.3333Z"
            fill="#393839"
          />
        </svg>
      )}
      {type === "shield" && (
        <svg
          width="47"
          height="57"
          viewBox="0 0 47 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.7939 54.5652V1.52005L24.8131 1C30.7023 3.0802 42.6825 7.34462 43.4902 7.76066C44.2978 8.1767 44.4998 22.1487 44.4998 29.0827C43.4902 33.2431 41.3701 41.668 40.9663 42.084L38.4423 44.6843L31.8801 51.4449L22.7939 54.5652Z"
            fill="#FFCB05"
          />
          <path
            d="M22.7939 54.1553V2.91568L20.8317 2.41333C15.1084 4.42273 3.46566 8.542 2.68076 8.94388C1.89585 9.34575 1.69963 22.8422 1.69963 29.5402C2.68076 33.559 4.74113 41.6971 5.13359 42.0989L7.58641 44.6107L13.9638 51.1412L22.7939 54.1553Z"
            fill="white"
          />
          <path
            d="M15.7364 52.5955L22.3552 56.0399C22.4903 56.1075 22.6929 56.175 22.828 56.175C22.963 56.175 23.1656 56.1075 23.3007 56.0399L29.9195 52.5955C39.5775 47.5301 45.5884 37.6695 45.5884 26.7283V8.89817C45.5884 8.49294 45.3182 8.08771 44.913 7.95264L23.1656 0.0506537C22.963 -0.0168846 22.6929 -0.0168846 22.4903 0.0506537L0.675383 7.95264C0.270153 8.08771 0 8.49294 0 8.89817V26.7283C0.0675383 37.6695 6.07845 47.5976 15.7364 52.5955ZM2.09369 9.6411L22.828 2.0768L43.5622 9.6411V26.7958C43.5622 36.9266 37.9565 46.1793 28.9739 50.8395L22.828 54.0138L16.682 50.7719C7.69937 46.1118 2.09369 36.859 2.09369 26.7283V9.6411Z"
            fill="#393839"
            stroke="#393839"
          />
          <path
            d="M20.8018 32.8067C21.0044 33.0093 21.207 33.0769 21.4772 33.0769C21.7473 33.0769 22.0175 32.9418 22.2201 32.7392L34.7147 19.3666C35.1199 18.9614 35.0524 18.286 34.6471 17.9483C34.2419 17.5431 33.5665 17.6106 33.2288 18.0158L21.4096 30.6455L13.8453 23.689C13.4401 23.2838 12.7647 23.3513 12.427 23.7566C12.0218 24.1618 12.0893 24.8372 12.4946 25.1749L20.8018 32.8067Z"
            fill="#393839"
            stroke="#393839"
          />
        </svg>
      )}
      {type === "land-sale" && (
        <svg
          width="35"
          height="25"
          viewBox="0 0 35 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="28.1025" cy="4" rx="3" ry="3.5" fill="#FFCB05" />
          <circle cx="26.1025" cy="6.5" r="3" fill="#FFCB05" />
          <circle cx="31.1025" cy="8.5" r="3" fill="#FFCB05" />
          <circle cx="30.1025" cy="12.5" r="3" fill="#FFCB05" />
          <ellipse cx="27.1025" cy="11" rx="4" ry="4.5" fill="#FFCB05" />
          <path
            d="M3.72168 5.26426C3.72168 6.6125 4.81855 7.70937 6.1668 7.70937C7.51504 7.70937 8.61191 6.6125 8.61191 5.26426C8.61191 3.91572 7.51504 2.81885 6.1668 2.81885C4.81855 2.81885 3.72168 3.91572 3.72168 5.26426ZM6.1668 3.41885C7.18413 3.41885 8.01191 4.24678 8.01191 5.26426C8.01191 6.28174 7.18413 7.10937 6.1668 7.10937C5.14946 7.10937 4.32168 6.28174 4.32168 5.26426C4.32168 4.24678 5.14946 3.41885 6.1668 3.41885Z"
            fill="#212121"
            stroke="#212121"
            strokeWidth="0.25"
          />
          <path
            d="M6.4667 1.66104V0.8C6.4667 0.63418 6.33237 0.5 6.1667 0.5C6.00103 0.5 5.8667 0.63418 5.8667 0.8V1.66104C5.8667 1.82686 6.00103 1.96104 6.1667 1.96104C6.33237 1.96104 6.4667 1.82686 6.4667 1.66104Z"
            fill="#212121"
            stroke="#212121"
            strokeWidth="0.25"
          />
          <path
            d="M3.22256 1.89539C3.10537 1.7782 2.91553 1.7782 2.79834 1.89539C2.68115 2.01257 2.68115 2.20242 2.79834 2.3196L3.40728 2.92839C3.46587 2.98699 3.54263 3.01628 3.61938 3.01628C3.69614 3.01628 3.7729 2.98699 3.83149 2.92839C3.94868 2.81121 3.94868 2.62136 3.83149 2.50417L3.22256 1.89539Z"
            fill="#212121"
            stroke="#212121"
            strokeWidth="0.25"
          />
          <path
            d="M1.70234 4.96387C1.53667 4.96387 1.40234 5.09805 1.40234 5.26387C1.40234 5.42969 1.53667 5.56387 1.70234 5.56387H2.56338C2.72905 5.56387 2.86338 5.42969 2.86338 5.26387C2.86338 5.09805 2.72905 4.96387 2.56338 4.96387H1.70234Z"
            fill="#212121"
            stroke="#212121"
            strokeWidth="0.25"
          />
          <path
            d="M3.40728 7.59973L2.79834 8.20852C2.68115 8.32571 2.68115 8.51555 2.79834 8.63274C2.85693 8.69133 2.93369 8.72063 3.01045 8.72063C3.08721 8.72063 3.16396 8.69133 3.22256 8.63274L3.83149 8.02395C3.94868 7.90676 3.94868 7.71692 3.83149 7.59973C3.71431 7.48254 3.52446 7.48254 3.40728 7.59973Z"
            fill="#212121"
            stroke="#212121"
            strokeWidth="0.25"
          />
          <path
            d="M5.8667 8.86714V9.72817C5.8667 9.89399 6.00103 10.0282 6.1667 10.0282C6.33237 10.0282 6.4667 9.89399 6.4667 9.72817V8.86714C6.4667 8.70132 6.33237 8.56714 6.1667 8.56714C6.00103 8.56714 5.8667 8.70132 5.8667 8.86714Z"
            fill="#212121"
            stroke="#212121"
            strokeWidth="0.25"
          />
          <path
            d="M8.92617 7.59973C8.80898 7.48254 8.61914 7.48254 8.50195 7.59973C8.38477 7.71692 8.38477 7.90676 8.50195 8.02395L9.11089 8.63274C9.16948 8.69133 9.24624 8.72063 9.323 8.72063C9.39976 8.72063 9.47651 8.69133 9.53511 8.63274C9.65229 8.51555 9.65229 8.32571 9.53511 8.20852L8.92617 7.59973Z"
            fill="#212121"
            stroke="#212121"
            strokeWidth="0.25"
          />
          <path
            d="M10.6308 5.56423C10.7964 5.56423 10.9308 5.43005 10.9308 5.26423C10.9308 5.09841 10.7964 4.96423 10.6308 4.96423H9.76973C9.60405 4.96423 9.46973 5.09841 9.46973 5.26423C9.46973 5.43005 9.60405 5.56423 9.76973 5.56423H10.6308Z"
            fill="#212121"
            stroke="#212121"
            strokeWidth="0.25"
          />
          <path
            d="M9.11123 1.89539L8.50244 2.50417C8.38525 2.62136 8.38525 2.81121 8.50244 2.92839C8.56104 2.98699 8.63779 3.01628 8.71455 3.01628C8.79131 3.01628 8.86807 2.98699 8.92666 2.92839L9.53545 2.3196C9.65264 2.20242 9.65264 2.01257 9.53545 1.89539C9.41826 1.7782 9.22842 1.7782 9.11123 1.89539Z"
            fill="#212121"
            stroke="#212121"
            strokeWidth="0.25"
          />
          <path
            d="M31.5093 5C31.6015 4.68242 31.648 4.35752 31.648 4.02998C31.648 2.0835 30.0578 0.5 28.1031 0.5C26.2677 0.5 24.7542 1.88428 24.579 3.68428C23.3668 4.2749 22.5934 5.4998 22.5934 6.85449C22.5934 7.52568 22.7828 8.17285 23.143 8.73799C22.783 9.40215 22.5934 10.1434 22.5934 10.8937C22.5934 13.4035 24.6443 15.4455 27.1652 15.4455C27.3683 15.4455 27.5758 15.4253 27.7845 15.3957V23.9H1.40254C1.23687 23.9 1.10254 24.0342 1.10254 24.2C1.10254 24.3658 1.23687 24.5 1.40254 24.5H33.8025C33.9682 24.5 34.1025 24.3658 34.1025 24.2C34.1025 24.0342 33.9682 23.9 33.8025 23.9H28.3845V15.4223C28.7593 15.5534 29.148 15.6233 29.5459 15.6233C31.5005 15.6233 33.0908 14.0398 33.0908 12.0934C33.0908 11.9396 33.0795 11.7837 33.0566 11.6202C33.7322 10.8547 34.1025 9.88145 34.1025 8.86338C34.1025 7.16035 33.0722 5.64365 31.5093 5ZM32.5198 11.3185C32.4543 11.3876 32.4256 11.4837 32.4423 11.5774C32.475 11.7605 32.4908 11.9293 32.4908 12.0934C32.4908 13.7091 31.1696 15.0233 29.5459 15.0233C29.1456 15.0233 28.7559 14.939 28.3845 14.7792V11.6748C30.2509 11.522 31.7236 9.9637 31.7236 8.0665C31.7236 7.90068 31.5893 7.7665 31.4236 7.7665C31.258 7.7665 31.1236 7.90068 31.1236 8.0665C31.1236 9.63279 29.92 10.9244 28.3845 11.0748V7.37722C29.2867 7.2333 29.979 6.45488 29.979 5.51621C29.979 5.35039 29.8447 5.21621 29.679 5.21621C29.5133 5.21621 29.379 5.35039 29.379 5.51621C29.379 6.12266 28.9535 6.62942 28.3845 6.76484V5.30996C28.3845 5.14414 28.2502 5.00996 28.0845 5.00996C27.9188 5.00996 27.7845 5.14414 27.7845 5.30996V8.31304C26.9266 8.17014 26.27 7.42849 26.27 6.53516C26.27 6.36934 26.1357 6.23516 25.97 6.23516C25.8043 6.23516 25.67 6.36934 25.67 6.53516C25.67 7.75977 26.5945 8.77139 27.7845 8.91926V13.0195C26.2492 12.8691 25.0456 11.5775 25.0456 10.0112C25.0456 9.84541 24.9112 9.71123 24.7456 9.71123C24.5799 9.71123 24.4456 9.84541 24.4456 10.0112C24.4456 11.9084 25.9181 13.4668 27.7845 13.6195V14.7879C27.575 14.822 27.3672 14.8455 27.1652 14.8455C24.9751 14.8455 23.1934 13.0728 23.1934 10.8937C23.1934 10.1879 23.3871 9.49121 23.7534 8.87861C23.8146 8.77607 23.8094 8.64688 23.7398 8.5499C23.3824 8.05039 23.1934 7.46416 23.1934 6.85449C23.1934 5.6791 23.8958 4.62119 24.9829 4.15918C25.0891 4.11406 25.16 4.01211 25.1652 3.89668C25.2361 2.32842 26.5267 1.1 28.1031 1.1C29.7269 1.1 31.048 2.41426 31.048 4.02998C31.048 4.3833 30.9821 4.73398 30.8523 5.07236C30.8229 5.14883 30.8263 5.23408 30.8613 5.3082C30.8963 5.38232 30.9603 5.43887 31.0381 5.46465C32.5122 5.95303 33.5025 7.31885 33.5025 8.86338C33.5025 9.77715 33.1535 10.649 32.5198 11.3185Z"
            fill="#212121"
            stroke="#212121"
            strokeWidth="0.25"
          />
        </svg>
      )}
      {type === "home-insurance" && (
        <svg
          width="30"
          height="29"
          viewBox="0 0 30 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.2734 23.5201V16.3848L23.0303 14.7992L28.58 16.6491V22.1988C28.58 22.7273 28.0515 24.0487 27.7872 24.5772C27.5758 25.0001 27.1706 25.6343 26.9944 25.8986C26.3777 26.4271 25.0916 27.4842 24.8802 27.4842C24.6688 27.4842 23.5589 27.8366 23.0303 28.0127L20.3876 26.9557L18.2734 23.5201Z"
            fill="#FFCB05"
          />
          <path
            d="M22.7446 23.7175C22.6675 23.718 22.591 23.7032 22.5196 23.674C22.4481 23.6448 22.3832 23.6019 22.3284 23.5475L20.8628 22.082C20.7524 21.9716 20.6904 21.8219 20.6904 21.6658C20.6904 21.5096 20.7524 21.3599 20.8628 21.2495C20.9732 21.1391 21.1229 21.0771 21.2791 21.0771C21.4352 21.0771 21.5849 21.1391 21.6953 21.2495L22.7446 22.3047L25.2595 19.784C25.3142 19.7293 25.379 19.686 25.4505 19.6564C25.5219 19.6268 25.5984 19.6116 25.6757 19.6116C25.753 19.6116 25.8296 19.6268 25.901 19.6564C25.9724 19.686 26.0373 19.7293 26.0919 19.784C26.1466 19.8386 26.19 19.9035 26.2195 19.9749C26.2491 20.0464 26.2643 20.1229 26.2643 20.2002C26.2643 20.2775 26.2491 20.354 26.2195 20.4255C26.19 20.4969 26.1466 20.5618 26.0919 20.6164L23.1608 23.5475C23.106 23.6019 23.0411 23.6448 22.9697 23.674C22.8982 23.7032 22.8218 23.718 22.7446 23.7175Z"
            fill="#393839"
          />
          <path
            d="M18.424 24.3038H5.74402C5.27759 24.3038 4.83027 24.1185 4.50045 23.7887C4.17064 23.4589 3.98535 23.0116 3.98535 22.5451V8.47579C3.98577 8.37561 4.01185 8.27721 4.06111 8.18998C4.11037 8.10274 4.18117 8.02959 4.26674 7.9775L4.3195 7.94233L14.2853 2.54322C14.5427 2.40366 14.8308 2.33057 15.1236 2.33057C15.4164 2.33057 15.7045 2.40366 15.9619 2.54322L25.9277 7.94233L25.9804 7.9775C26.066 8.02959 26.1368 8.10274 26.186 8.18998C26.2353 8.27721 26.2614 8.37561 26.2618 8.47579V15.5925C26.2618 15.6835 26.2406 15.7733 26.1999 15.8547C26.1592 15.9361 26.1001 16.0069 26.0273 16.0615C25.9552 16.1152 25.8717 16.1516 25.7832 16.1679C25.6948 16.1841 25.6038 16.1798 25.5173 16.1553L23.3307 15.5105L18.6409 16.8412V21.4313C18.6409 21.5603 18.6409 21.6892 18.6409 21.8241C18.6717 22.3969 18.7801 22.9629 18.9633 23.5065C18.9924 23.5947 19.0001 23.6885 18.9859 23.7802C18.9716 23.8719 18.9357 23.959 18.8813 24.0341C18.8316 24.1119 18.7644 24.1768 18.6849 24.2237C18.6055 24.2705 18.5161 24.298 18.424 24.3038ZM5.1578 8.83925V22.5451C5.1578 22.7006 5.21956 22.8497 5.3295 22.9597C5.43944 23.0696 5.58854 23.1313 5.74402 23.1313H17.6561C17.5615 22.7344 17.4988 22.3306 17.4685 21.9237C17.4685 21.7772 17.4685 21.6189 17.4685 21.4548V16.425C17.4636 16.2934 17.5032 16.164 17.5808 16.0577C17.6584 15.9513 17.7696 15.8742 17.8964 15.8387L23.1724 14.338C23.2759 14.309 23.3854 14.309 23.489 14.338L25.0894 14.7894V8.83925L15.3991 3.56324C15.3143 3.51808 15.2197 3.49446 15.1236 3.49446C15.0275 3.49446 14.9329 3.51808 14.8481 3.56324L5.1578 8.83925Z"
            fill="#393839"
          />
          <path
            d="M28.1552 10.2637C27.8666 10.2623 27.5827 10.1898 27.3287 10.0527L25.3941 9.00919L25.3414 8.97402L15.3756 3.5925C15.2908 3.54734 15.1962 3.52372 15.1001 3.52372C15.004 3.52372 14.9094 3.54734 14.8245 3.5925L2.90078 10.0409C2.69759 10.1512 2.47465 10.2204 2.24471 10.2444C2.01477 10.2684 1.78235 10.2469 1.56075 10.181C1.33914 10.1151 1.1327 10.0062 0.953239 9.86043C0.773775 9.71469 0.624807 9.53499 0.514859 9.33162C0.40481 9.12807 0.336009 8.90481 0.312401 8.67463C0.288792 8.44445 0.310839 8.21187 0.377278 7.99022C0.443718 7.76858 0.553243 7.56222 0.699578 7.38298C0.845913 7.20374 1.02618 7.05514 1.23005 6.94569L13.1421 0.497246C13.7431 0.170928 14.4162 0 15.1001 0C15.784 0 16.457 0.170928 17.0581 0.497246L28.976 6.94569C29.3853 7.16569 29.6908 7.53872 29.826 7.98331C29.9059 8.24698 29.9227 8.52574 29.8751 8.79711C29.8275 9.06849 29.7169 9.32489 29.552 9.54564C29.3872 9.76639 29.1727 9.94533 28.9261 10.068C28.6794 10.1907 28.4073 10.2537 28.1318 10.252L28.1552 10.2637ZM15.1235 2.34971C15.4162 2.34921 15.7043 2.42175 15.9618 2.56075L25.9276 7.95986L25.9804 7.99503L27.8856 9.02092C28.0225 9.09362 28.1826 9.10915 28.3309 9.0641C28.4792 9.01906 28.6036 8.91712 28.677 8.78057C28.7501 8.64439 28.7665 8.48482 28.7226 8.3366C28.6787 8.18839 28.578 8.06351 28.4425 7.98917L16.5187 1.54072C16.0903 1.30881 15.6107 1.18736 15.1235 1.18736C14.6363 1.18736 14.1568 1.30881 13.7283 1.54072L1.81041 7.98917C1.67439 8.06149 1.5723 8.18445 1.52622 8.33145C1.48015 8.47845 1.49379 8.63768 1.5642 8.77471C1.59998 8.84435 1.64935 8.90612 1.70939 8.95637C1.76944 9.00662 1.83894 9.04434 1.9138 9.06729C1.98866 9.09024 2.06736 9.09796 2.14525 9.09C2.22315 9.08203 2.29866 9.05854 2.36732 9.02092L14.2852 2.57247C14.5417 2.42939 14.8299 2.35281 15.1235 2.34971Z"
            fill="#393839"
          />
          <path
            d="M23.3304 28.9936C23.276 29.0022 23.2206 29.0022 23.1663 28.9936C22.2389 28.7297 21.3683 28.2964 20.5986 27.7157L20.4227 27.5867C20.2278 27.4334 20.0418 27.269 19.8658 27.0943C19.3119 26.563 18.8397 25.9525 18.4648 25.2828C18.2222 24.8492 18.0257 24.3914 17.8785 23.9169C17.6497 23.2749 17.5116 22.604 17.4682 21.9238C17.4682 21.7772 17.4682 21.6189 17.4682 21.4548V16.425C17.4633 16.2934 17.5029 16.164 17.5805 16.0577C17.6581 15.9514 17.7693 15.8742 17.8961 15.8388L23.1721 14.3381C23.2756 14.309 23.3852 14.309 23.4887 14.3381L28.7647 15.8388C28.8915 15.8742 29.0027 15.9514 29.0803 16.0577C29.1579 16.164 29.1975 16.2934 29.1926 16.425V21.4548C29.1939 23.3393 28.5106 25.1601 27.2698 26.5784C27.1228 26.7511 26.9662 26.9155 26.8008 27.0708C25.8711 27.9705 24.7363 28.6304 23.4945 28.9936C23.4402 29.0022 23.3848 29.0022 23.3304 28.9936ZM18.6406 16.8647V21.4548C18.6406 21.5838 18.6406 21.7127 18.6406 21.8476C18.6714 22.4204 18.7798 22.9864 18.963 23.53C19.089 23.9376 19.258 24.3307 19.4672 24.7025C19.7836 25.2689 20.1783 25.7879 20.6396 26.2442C20.7921 26.3849 20.9445 26.5256 21.1086 26.6546L21.2493 26.7601C21.8772 27.2302 22.5811 27.5891 23.3304 27.8212C24.3259 27.5077 25.2364 26.9703 25.9918 26.2501C26.1267 26.1153 26.2615 25.9804 26.3846 25.8339C27.4434 24.6212 28.0247 23.0646 28.0202 21.4548V16.8705L23.3304 15.5105L18.6406 16.8647Z"
            fill="#393839"
          />
          <path
            d="M18.4238 24.3038H11.0198C10.8643 24.3038 10.7152 24.242 10.6053 24.1321C10.4954 24.0221 10.4336 23.873 10.4336 23.7175V13.1655C10.4336 12.6991 10.6189 12.2518 10.9487 11.922C11.2785 11.5921 11.7258 11.4069 12.1923 11.4069H18.0545C18.5209 11.4069 18.9682 11.5921 19.298 11.922C19.6279 12.2518 19.8132 12.6991 19.8132 13.1655V16.0966C19.818 16.2282 19.7784 16.3576 19.7008 16.4639C19.6232 16.5703 19.512 16.6474 19.3852 16.6829L18.6407 16.8646V21.4547C18.6407 21.5837 18.6407 21.7127 18.6407 21.8475C18.6715 22.4203 18.7799 22.9863 18.9631 23.5299C18.9922 23.6181 18.9999 23.7119 18.9857 23.8036C18.9714 23.8954 18.9355 23.9824 18.8811 24.0575C18.8289 24.1309 18.7605 24.1913 18.6812 24.234C18.6019 24.2767 18.5138 24.3006 18.4238 24.3038ZM11.606 23.1313H17.6559C17.5613 22.7344 17.4986 22.3306 17.4683 21.9237C17.4683 21.7771 17.4683 21.6189 17.4683 21.4547V16.4249C17.4634 16.2933 17.503 16.164 17.5806 16.0576C17.6582 15.9513 17.7694 15.8742 17.8962 15.8387L18.6407 15.6511V13.1655C18.6407 13.0101 18.5789 12.8609 18.469 12.751C18.3591 12.6411 18.21 12.5793 18.0545 12.5793H12.1923C12.0368 12.5793 11.8877 12.6411 11.7777 12.751C11.6678 12.8609 11.606 13.0101 11.606 13.1655V23.1313Z"
            fill="#393839"
          />
        </svg>
      )}
      {type === "estate" && (
        <svg
          width="25"
          height="27"
          viewBox="0 0 25 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.31382 15.4473L3.46058 13.6125L2.77253 13.1537L2.08447 10.1722V7.87866L5.06604 5.3558H8.04761L8.50631 4.43839C8.73566 3.97969 8.96502 3.75034 9.19437 3.52099C9.42372 3.29164 10.1118 2.83293 10.5705 2.37423C11.0292 1.91553 11.2585 1.91553 11.4879 1.91553H12.6346C13.0933 1.99198 14.1025 2.14488 14.4695 2.14488C14.9282 2.14488 15.6162 2.60358 15.8456 2.83293C16.0749 3.06228 16.763 3.97969 16.763 4.20904C16.763 4.39252 17.2217 5.05 17.451 5.3558H17.9097H19.5152H20.4326C20.6619 5.3558 21.35 5.8145 21.35 6.04385C21.35 6.22733 22.2674 6.73191 22.7261 6.96126L22.9555 8.33737C23.0319 8.49027 23.2307 8.93368 23.4142 9.48413C23.6435 10.1722 23.6435 10.6309 23.4142 11.0896C23.2307 11.4565 22.5732 12.9244 22.2674 13.6125C22.4203 14.0712 22.772 15.0803 22.9555 15.4473C23.1389 15.8142 23.6435 16.2118 23.8729 16.3647C23.5671 17.3585 22.9096 19.438 22.7261 19.8049C22.4968 20.2636 22.4968 20.2636 22.2674 20.493L22.2674 20.493C22.038 20.7224 21.5793 21.181 21.35 21.181C21.1206 21.181 20.8913 21.4104 20.2032 21.6398C19.5152 21.8691 18.8271 21.8691 18.5978 21.8691H17.451L15.8456 24.392C15.7691 24.5449 15.5245 24.8507 15.1575 24.8507C14.6988 24.8507 14.6988 25.08 14.4695 25.08H13.552C13.0933 25.08 12.4053 25.3094 11.9466 25.08C11.4879 24.8507 11.4879 25.08 11.2585 24.8507C11.0292 24.6213 10.1118 24.6213 9.65307 24.392C9.19437 24.1626 7.81826 21.8691 7.35956 21.6398H6.44215H4.83669C4.46973 21.6398 3.61348 21.334 3.23123 21.181L2.08447 18.1995L2.31382 15.4473Z"
            fill="#FFCB05"
          />
          <circle cx="12.4052" cy="13.6124" r="4.81638" fill="white" />
          <path
            d="M10.9287 19.0568C11.4493 19.2034 11.9786 19.2763 12.5048 19.2763C13.4797 19.2763 14.4431 19.027 15.3169 18.5375C16.6627 17.7842 17.6344 16.552 18.0532 15.0676C18.4721 13.5832 18.2876 12.0251 17.5342 10.6794C15.9784 7.90127 12.4531 6.90808 9.67583 8.46256C6.89829 10.0179 5.90371 13.5429 7.45903 16.3204C8.21206 17.6665 9.44458 18.638 10.9287 19.0568ZM10.2563 9.49944C10.9632 9.10345 11.7309 8.91561 12.4884 8.91561C14.0955 8.91561 15.6578 9.76075 16.4974 11.2604C17.0957 12.329 17.2423 13.5665 16.9095 14.7453C16.577 15.9244 15.805 16.9029 14.7361 17.5014C13.6678 18.1 12.4303 18.247 11.2509 17.9139C10.0721 17.5813 9.09366 16.8094 8.49535 15.7405C7.26034 13.534 8.0501 10.7347 10.2563 9.49944Z"
            fill="#212121"
          />
          <path
            d="M7.32461 22.2258C7.97217 24.4323 9.98833 25.9932 12.3434 26.0224C12.366 26.0227 12.3888 26.0227 12.4116 26.0227C13.3183 26.0227 14.211 25.7909 14.9977 25.3504C16.1807 24.6875 17.0539 23.6142 17.4608 22.3455C19.6976 22.8892 22.061 21.9214 23.266 19.8919C24.4668 17.8682 24.1841 15.3339 22.6374 13.63C24.2286 11.9675 24.5748 9.44014 23.4227 7.38252C23.4216 7.38085 23.4207 7.37862 23.4196 7.37695C23.4124 7.3636 23.404 7.34885 23.3996 7.34161C23.3993 7.34133 23.3993 7.34078 23.399 7.3405C23.3974 7.33772 23.3954 7.33438 23.3937 7.33132C22.2322 5.28511 19.8938 4.27132 17.6506 4.76472C16.9985 2.55989 14.979 1.00318 12.6225 0.977851C12.6042 0.977295 12.5864 0.977295 12.5677 0.977295C10.2302 0.977295 8.20314 2.48753 7.51328 4.66426C5.27311 4.12356 2.91216 5.09727 1.7161 7.12928C0.51615 9.15601 0.803059 11.6903 2.35448 13.3912C0.766883 15.0589 0.425987 17.5874 1.58281 19.6403C2.73573 21.6932 5.07386 22.7153 7.32461 22.2258ZM3.59256 13.8601C3.72864 13.7488 3.80795 13.5829 3.81018 13.4071C3.81185 13.2312 3.73588 13.0637 3.6023 12.9493C2.08288 11.6491 1.71944 9.45572 2.73907 7.73316C3.75536 6.00641 5.85416 5.26535 7.72756 5.97079C7.89258 6.03285 8.07597 6.01866 8.22902 5.93183C8.38208 5.84529 8.48922 5.69585 8.52122 5.52248C8.88215 3.57089 10.5802 2.165 12.568 2.165C12.5822 2.165 12.5964 2.165 12.6106 2.16528C14.6125 2.18671 16.3017 3.63239 16.6265 5.60263C16.6551 5.776 16.7589 5.92794 16.9103 6.01727C17.0623 6.10687 17.2448 6.1244 17.4107 6.06597C19.2966 5.39892 21.379 6.18034 22.3644 7.9235C22.366 7.92628 22.368 7.92934 22.3694 7.93213L22.3783 7.94743C22.3808 7.95244 22.3836 7.95717 22.3864 7.96218V7.96246C23.3654 9.71035 22.9504 11.8951 21.4007 13.1572C21.2643 13.2682 21.1839 13.4338 21.1817 13.6099C21.1794 13.7858 21.2551 13.9533 21.3884 14.0683C22.9045 15.372 23.2643 17.566 22.2444 19.2852C21.2206 21.01 19.1188 21.7472 17.2498 21.0384C17.0854 20.9763 16.9017 20.99 16.7486 21.0757C16.5953 21.1619 16.4879 21.3111 16.4553 21.4839C16.2302 22.6828 15.4872 23.7138 14.4169 24.3129C13.8075 24.6544 13.1151 24.8339 12.4116 24.8339C12.3938 24.8339 12.3763 24.8339 12.3582 24.8336C12.3582 24.8336 12.3582 24.8336 12.3579 24.8336C10.3576 24.8088 8.67205 23.3598 8.35035 21.3885C8.32225 21.2151 8.21873 21.0632 8.06762 20.9736C7.97467 20.9185 7.86976 20.8903 7.76429 20.8903C7.69806 20.8903 7.63155 20.9015 7.56755 20.9237C5.68051 21.5863 3.59813 20.8016 2.61802 19.0576C1.63512 17.3136 2.04503 15.1277 3.59256 13.8601Z"
            fill="#212121"
          />
        </svg>
      )}
      {type === "arrow-right" && (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12.1688H20"
            stroke="#251B39"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 6.16882L20 12.1688L14 18.1688"
            stroke="#251B39"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {/* {type === "" && (

      )} */}
    </>
  );
};

export default Icon;
