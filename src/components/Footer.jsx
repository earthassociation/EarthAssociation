import twitter from "../assets/twitter.svg";
import facebook from "../assets/socialmedia SVG/facebook.svg";
import instagram from "../assets/socialmedia SVG/instagram.svg";
import youtube from "../assets/socialmedia SVG/youtube.svg";

const Footer = () => {
  return (
    <section className="bg-[#4C4D4C]">
      <div className="max-w-[1140px] mx-auto p-5 text-[18px] text-center text-white font-raleway">
        {/* <div className="mb-12"> */}
        {/* <h3 className="text-[20px] tab:text-[24px] mb-4">
						Subscribe to our Newsletter
					</h3>
					<form
						action=""
						className="flex flex-col gap-4 tab:flex-row tab:gap-6"
					>
						<input
							type="text"
							placeholder="Name"
							className="bg-transparent flex-grow-[1] border-b text-[14px] tab:text-lg font-medium border-b-white py-[6px] px-[16px]"
						/>
						<input
							type="email"
							placeholder="Enter Your Email"
							className="bg-transparent border-b flex-grow-[2] text-[14px] tab:text-lg font-medium border-b-white py-[6px] px-[16px]"
						/>
						<button
							type="submit"
							className="bg-pgreen text-[14px] tab:text-lg font-semibold rounded-md py-[20px] px-[50px]"
						>
							SUBSCRIBE
						</button>
					</form>
					<hr className="tab:hidden mx-auto h-[1px] bg-white mt-8 w-[80%]" />
				</div> */}
        <div className="flex justify-between items-center flex-col md:flex-row gap-4">
          <div className="text-[18px] text-start font-medium">
            <h3 className="text-[22px]">The Earth Association</h3>
            <div className="flex mt-2 flex-col lg:flex-row lg:gap-4">
              <span>Contact Us -</span>
              <div className="flex flex-col  tab:flex-row tab:gap-4">
                <p>
                  Email:{" "}
                  <a href="mail:earthassociation22@gmail.com">
                    earthassociation22@gmail.com
                  </a>
                </p>
                <p>
                  Tel: <a href="tel:+918829012209">+91 88290 12209</a>
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            {/* <a target="_blank" href="#">
              <img
                src={twitter}
                alt=""
                width={50}
                height={50}
                className="scale-[80%] bg-black p-3 rounded-full "
              />
            </a> */}
            <a target="_blank" href="https://www.facebook.com/share/J5jBuGzJJFmfYAGm/?mibextid=LQQJ4d">
              <img
                src={facebook}
                alt=""
                width={50}
                height={50}
                className="scale-[80%] bg-black p-3 rounded-full "
              />
            </a>
            <a target="_blank" href="https://www.instagram.com/earth_association?igsh=OTUxMThodjV0MTlh">
              <img
                src={instagram}
                alt=""
                width={50}
                height={50}
                className="scale-[80%] bg-black p-3 rounded-full "
              />
            </a>
            <a target="_blank" href="https://youtube.com/@theearthassociation8535?si=2csfWBhOnYa8DRyw">
              <img
                src={youtube}
                alt=""
                width={50}
                height={50}
                className="scale-[80%] bg-black p-3 rounded-full "
              />
            </a>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="mt-6 text-center text-[14px] text-gray-400">
          <p>© 2024 The Earth Association. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
};
export default Footer;

