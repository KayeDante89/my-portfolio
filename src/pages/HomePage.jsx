import profilePic from '../assets/profile-img2.jpg'

export default function HomePage() {
	return (
		<>
			<div id="home-section" className="page-height">
				<div className="home-inner-content">
					<div className="profile-pic-container">
						<img src={profilePic} alt="profile picture" className="profile-picture"/>
					</div>
					<div className="home-text-container">
						<h1 id="greeting">Hi! I'm Kaye.</h1>
						<h3>Junior Web Developer</h3>
					</div>
				</div>
			</div>
			<div id="about-section">
				<h1>Let me introduce myself..</h1>
				<div class="description-container">
					<div id="inner-about-section">
						<p>
							Hi, I'm Kaye, a passionate creator hailing from the Philippines and currently based in Perth, WA. I have always had a profound love for the world of tech and the arts. I have a background as a Graphic Designer and love delving into various creative endeavors like calligraphy, digital art and, of course, creating Web apps.
						</p>
						<br/>
						<p>
							My tech journey took flight after completing the She Code Plus course, a transformative 6-month coding bootcamp that has been run by the lovely people at She Codes Australia. This experience opened doors, enabling me to achieve my goal of landing a job as a Web Developer in 2023. I'm incredibly grateful for the incredible women in tech who have supported me throughout this transition.
						</p>
					</div>
				</div>
			</div>
		</>
		
	)
}