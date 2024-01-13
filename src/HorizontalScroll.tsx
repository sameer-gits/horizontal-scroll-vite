import { useEffect } from "react";

function HorizontalScroll() {
  useEffect(() => {
    const track = document.getElementById("track");
    const frame = document.getElementById("frame");

    function transform() {
      const offsetTop = track?.offsetTop || 0;
      let percentage =
        ((window.scrollY - offsetTop) / window.innerHeight) * 100;
      percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
      if (frame) {
        frame.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
      }
    }

    window.addEventListener("scroll", transform);

    return () => {
      window.removeEventListener("scroll", transform);
    };
  }, []);

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-lime-200">
        <p>Section 1</p>
      </div>
      <div className="h-screen flex items-center justify-center bg-yellow-200">
        <p>Section 2</p>
      </div>
      <div className="h-[500vh]" id="track">
        {" "}
        {/* Set a suitable height for the 'track' element */}
        <div
          className="w-full h-screen sticky top-0 overflow-hidden"
          id="camera"
        >
          <div className="flex h-full" id="frame">
            <div className="flex-shrink-0 flex-grow-0 w-screen" id="item1">
              <img
                src="https://images.pexels.com/photos/6875562/pexels-photo-6875562.jpeg?auto=compress&cs=tinysrgb&w=1000"
                className="object-cover w-screen object-center h-full"
                alt="item1"
              />
            </div>
            <div className="flex-shrink-0 flex-grow-0 w-screen" id="item2">
              {" "}
              <img
                src="https://images.pexels.com/photos/19149193/pexels-photo-19149193/free-photo-of-cup-of-cocoa-drink-and-an-open-book.jpeg?auto=compress&cs=tinysrgb&w=1000"
                className="object-cover w-screen object-center h-full"
                alt="item2"
              />
            </div>
            <div className="flex-shrink-0 flex-grow-0 w-screen" id="item3">
              {" "}
              <img
                src="https://images.pexels.com/photos/13221799/pexels-photo-13221799.jpeg?auto=compress&cs=tinysrgb&w=1000"
                className="object-cover w-screen object-center h-full"
                alt="item3"
              />
            </div>
            <div className="flex-shrink-0 flex-grow-0 w-screen" id="item4">
              {" "}
              <img
                src="https://images.pexels.com/photos/19187317/pexels-photo-19187317/free-photo-of-hidden.jpeg?auto=compress&cs=tinysrgb&w=1000"
                className="object-cover w-screen object-center h-full"
                alt="item4"
              />
            </div>
            <div className="flex-shrink-0 flex-grow-0 w-screen" id="item5">
              {" "}
              <img
                src="https://images.pexels.com/photos/14426316/pexels-photo-14426316.jpeg?auto=compress&cs=tinysrgb&w=1000"
                className="object-cover w-screen object-center h-full"
                alt="item5"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen flex items-center justify-center bg-blue-200">
        <p>Section 3</p>
      </div>
      <div className="h-screen flex items-center justify-center bg-sky-200">
        <p>Section 4</p>
      </div>
    </>
  );
}

export default HorizontalScroll;
