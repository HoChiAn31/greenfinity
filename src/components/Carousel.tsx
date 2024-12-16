// import { LeftOutlined, RightOutlined } from "@ant-design/icons";
// import React, { useState, useEffect, ReactNode } from "react";

// interface CarouselProps {
//   autoSlide?: boolean;
//   autoSlideInterval?: number;
//   slides: string[];
// }

// export default function Carousel({
//   autoSlide = false,
//   autoSlideInterval = 3000,
//   slides,
// }: CarouselProps) {
//   const [curr, setCurr] = useState(0);

//   const prev = () =>
//     setCurr((curr) =>
//       curr === 0 ? React.Children.count(slides) - 1 : curr - 1
//     );
//   const next = () =>
//     setCurr((curr) =>
//       curr === React.Children.count(slides) - 1 ? 0 : curr + 1
//     );

//   useEffect(() => {
//     if (!autoSlide) return;
//     const slideInterval = setInterval(next, autoSlideInterval);
//     return () => clearInterval(slideInterval);
//   }, [autoSlide, autoSlideInterval]);

//   return (
//     <div className="overflow-hidden relative">
//       <div
//         className="flex transition-transform ease-out duration-500"
//         style={{ transform: `translateX(-${curr * 100}%)` }}
//       >
//         {React.Children.map(slides, (slide, index) => (
//           <div key={index}>{slide}</div>
//         ))}
//       </div>
//       <div className="absolute inset-0 flex items-center justify-between p-4">
//         <button
//           onClick={prev}
//           className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
//         >
//           <LeftOutlined />
//         </button>
//         <button
//           onClick={next}
//           className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
//         >
//           <RightOutlined />
//         </button>
//       </div>

//       <div className="absolute bottom-4 right-0 left-0">
//         <div className="flex items-center justify-center gap-2">
//           {React.Children.map(slides, (_, i) => (
//             <div
//               key={i}
//               className={`
//               transition-all w-3 h-3 bg-white rounded-full
//               ${curr === i ? "p-2" : "bg-opacity-50"}
//             `}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 3000,
  slides,
}: {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  slides: string[];
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((img) => (
          <img src={img} alt="" />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white text-primary-500 hover:bg-white h-8 w-8"
        >
          <LeftOutlined />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white text-primary-500 hover:bg-white  h-8 w-8"
        >
          <RightOutlined size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

//   const slides = [
//     "data:image/jpeg;base64,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",
//     "data:image/jpeg;base64,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",
//     "data:image/jpeg;base64,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",
//   ];
