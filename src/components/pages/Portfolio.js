import React from 'react';
import styles from '../styles/Landing.module.css';
import Layout from '../reusables/Layout';
import { animtionValues, transitionValues } from '../utils/pageAnimation';
import { motion } from 'framer-motion';

function Portfolio() {
	return (
		<div>
			<Layout bgText="Portfolio">
				<div className="w-100">
					<motion.div
						initial="out"
						animate="in"
						exit="out"
						variants={animtionValues}
						transition={transitionValues}
					>
						<div className={`sectionHeight ${styles.portfolio}`}>
							<div className="container pt-3">
								<h2 className="sectionHead--mid textIsPink text--light">
									Recent Projects
								</h2>

								<div className="row pt-3 pb-4">
									<div className="col-md-6">
										<div className={`center isClickable ${styles.projectCard}`}>
											<div>
												<div className={styles.imgHolder}>
													<img
														src="/images/food-order app.png"
														className="w-100"
														alt=""
													/>
												</div>
											</div>
											<div className={`center ${styles.projectInfo} `}>
												<div className="p-4 vAlign">
													<p className="textIsPink sectionHead--mid">
														Food order
													</p>
													<p className="textIsWhite">
														A food order site built with React
													</p>

													<a
														href="https://isaac-food-order-app.netlify.app/"
														target="_blank"
														rel="noreferrer"
														className="textIsPink textIsBold"
													>
														<i className="fas fa-link mx-1"></i>
														Visit Project
													</a>
													<a
														href="https://github.com/IsaacThaJunior/food-order-app"
														target="_blank"
														rel="noreferrer"
														className="textIsPink textIsBold"
													>
														<i className="fas fa-link mx-1"></i>
														Github
													</a>
												</div>
											</div>
										</div>
									</div>

									<div className="col-md-6">
										<div className={`center isClickable ${styles.projectCard}`}>
											<div>
												<div className={styles.imgHolder}>
													<img
														src="/images/Screenshot from 2022-01-21 10-12-58.png"
														className="w-100"
														alt=""
													/>
												</div>
											</div>
											<div className={`center ${styles.projectInfo} `}>
												<div className="p-4 vAlign">
													<p className="textIsPink sectionHead--mid">
														Wildfire Tracker
													</p>
													<p className="textIsWhite">
														A wildfire tracker used to monitor wildfire around
														the world built with Google maps SDK and NASA api
													</p>

													<a
														href="https://wildfire-app.netlify.app/"
														target="_blank"
														rel="noreferrer"
														className="textIsPink textIsBold"
													>
														<i className="fas fa-link mx-1"></i>
														Visit Project
													</a>
													<a
														href="https://github.com/IsaacThaJunior/Wildfire-tracker"
														target="_blank"
														rel="noreferrer"
														className="textIsPink textIsBold"
													>
														<i className="fas fa-link mx-1"></i>
														Github
													</a>
												</div>
											</div>
										</div>
									</div>

									<div className="col-md-6 mt-4">
										<div className={`center isClickable ${styles.projectCard}`}>
											<div>
												<div className={styles.imgHolder}>
													<img
														src="/images/forkify.png"
														className="w-100"
														alt=""
													/>
												</div>
											</div>
											<div className={`center ${styles.projectInfo} `}>
												<div className="p-4 vAlign">
													<p className="textIsPink sectionHead--mid">Forkify</p>
													<p className="textIsWhite">
														A recipe app built with Javascript
													</p>

													<a
														href="https://forkify-isaac.netlify.app/"
														target="_blank"
														rel="noreferrer"
														className="textIsPink textIsBold"
													>
														<i className="fas fa-link mx-1"></i>
														Visit Project
													</a>
													<a
														href="https://github.com/IsaacThaJunior/forkify-app"
														target="_blank"
														rel="noreferrer"
														className="textIsPink textIsBold"
													>
														<i className="fas fa-link mx-1"></i>
														Github
													</a>
												</div>
											</div>
										</div>
									</div>

									<div className="col-md-6 mt-4">
										<div className={`center isClickable ${styles.projectCard}`}>
											<div>
												<div className={styles.imgHolder}>
													<img
														src="/images/Map app.png"
														className="w-100"
														alt=""
													/>
												</div>
											</div>
											<div className={`center ${styles.projectInfo} `}>
												<div className="p-4 vAlign">
													<p className="textIsPink sectionHead--mid">
														Workout App
													</p>
													<p className="textIsWhite">
														An app built to track workouts using leaflet Api.
													</p>

													<a
														href="https://isaacthajunior.github.io/Mapty-app/"
														target="_blank"
														rel="noreferrer"
														className="textIsPink textIsBold"
													>
														<i className="fas fa-link mx-1"></i>
														Visit Project
													</a>
													<a
														href="https://github.com/IsaacThaJunior/Mapty-app"
														target="_blank"
														rel="noreferrer"
														className="textIsPink textIsBold"
													>
														<i className="fas fa-link mx-1"></i>
														Github
													</a>
												</div>
											</div>
										</div>
									</div>

									<div className="col-md-6 mt-4">
										<div className={`center isClickable ${styles.projectCard}`}>
											<div>
												<div className={styles.imgHolder}>
													<img
														src="/images/game.png"
														className="w-100"
														alt=""
													/>
												</div>
											</div>
											<div className={`center ${styles.projectInfo} `}>
												<div className="p-4 vAlign">
													<p className="textIsPink sectionHead--mid">
														Fun game
													</p>
													<p className="textIsWhite">
														A game built with Javascript.
													</p>

													<a
														href="https://isaacthajunior.github.io/fun-game/"
														target="_blank"
														rel="noreferrer"
														className="textIsPink textIsBold"
													>
														<i className="fas fa-link mx-1"></i>
														Visit Project
													</a>
													<a
														href="https://github.com/IsaacThaJunior/fun-game"
														target="_blank"
														rel="noreferrer"
														className="textIsPink textIsBold"
													>
														<i className="fas fa-link mx-1"></i>
														Github
													</a>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-6 mt-4">
										<div className={`center isClickable ${styles.projectCard}`}>
											<div>
												<div className={styles.imgHolder}>
													<img
														src="/images/task tracker.png"
														className="w-100"
														alt=""
													/>
												</div>
											</div>
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</Layout>
		</div>
	);
}

export default Portfolio;
