const Desc = ({ content }) => {
	return (
		<section>
			<div className="max-w-[1140px] mx-auto p-5  text-[18px] text-justify sm:text-center text-black font-raleway">
				<div className="mb-5">
					<p className="mb-[18px] leading-7 tracking-wider">
						{content}
					</p>
				</div>
			</div>
		</section>
	)
}
export default Desc
