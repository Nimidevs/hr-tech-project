/* eslint-disable react/prop-types */
export function Step({ imageSrc, title, description, tabimagesrc }) {
  return (
    <div className="p-[12px] pb-[44px] flex flex-col gap-5 bg-[#7E8693] bg-opacity-10 rounded-3xl max-w-[377.33px] max-[768px]:max-w-[100%]">
      <div>
        <picture>
          {/* <source media="(max-width:961px)" srcSet="image/500*580.jpg" /> */}
          <source
            media="(max-width:768px)"
            srcSet={tabimagesrc}
          />

          <img
            src={imageSrc}
            alt=""
            className="max-w-[100%] max-h-[254px] max-[768px]:w-[100%]"
          />
        </picture>
      </div>

      <h2 className="font-[800] text-[20px] leading-[28px] text-[#06BA63]">
        {" "}
        {title}{" "}
      </h2>

      <p className="font-[400] text-[16px] leading-[24px]">{description}</p>
    </div>
  );
}
