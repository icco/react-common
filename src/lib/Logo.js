import LogoIcon from "react-svg-loader!./dots.svg";

const Logo = params => {
  let size = 200;
  if (params.size) {
    size = params.size;
  }

  return (
    <div
      className={params.className}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <LogoIcon />
    </div>
  );
};

export default Logo;
