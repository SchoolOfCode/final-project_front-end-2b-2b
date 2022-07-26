//Menu
//Burger menu visible on mobile
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./menu.module.css";
import { useUser } from "@auth0/nextjs-auth0";
export default function Menu() {
	//Menu state
	const [menuOpen, setMenuOpen] = useState(false);
	const { user } = useUser();

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	// const [currentProfile, setCurrentProfile] = useState({});
	// useEffect(() => {
	// 	const getUserID = async () => {
	// 		const response = await fetch("/api/auth/me");
	// 		const data = await response.json();
	// 		const profileId = data.sub;
	// 		const url = `/api/profiles/getUser/${profileId}`;

	// 		fetch(url)
	// 			.then((res) => res.json())
	// 			.then((data) => {
	// 				setCurrentProfile(data[0]);
	// 			});
	// 	};
	// 	getUserID();
	// }, []);

	return (
		<>
			<div id="menu">
				{/* {!menuOpen && !user && (
					<div className={styles.menu} onClick={toggleMenu}>
						<Image
							className={styles.menuOpenImage}
							src="/media/icons/menuIcon.png"
							alt="open menu icon"
							width={90}
							height={90}
						/>
					</div>
				)}
				{!menuOpen && user && (
					<div className={styles.menu} onClick={toggleMenu}>
						<Image
							className={styles.menuProfileImage}
							src={currentProfile.avatar_url}
							alt="open menu icon"
							width={90}
							height={90}
						/>
					</div>
				)} */}

				{!menuOpen && (
					<div className={styles.menu} onClick={toggleMenu}>
						<Image
							className={styles.menuOpenImage}
							src="/media/icons/menuIcon.png"
							alt="open menu icon"
							width={90}
							height={90}
						/>
					</div>
				)}

				{menuOpen && (
					<div className={styles.modal} onClick={toggleMenu}>
						<div className={styles.menuClose}>
							<Image
								className={styles.menuCloseImage}
								src="/media/icons/menuClose.png"
								alt="close menu icon"
								width={60}
								height={60}
							/>
						</div>
						{/* {user && (
							<>
								<p className={styles.pageLinks}>
									Hi, {currentProfile.preferred_name}!
								</p>
								<img
									className={styles.menuProfileImage}
									src={currentProfile.avatar_url}
									alt={currentProfile.preferred_name}
									height={90}
									width={90}
								/>
							</>
						)} */}

						<ul className={styles.pageLinks}>
							<Link href="/">
								<a title="Go to home page">Home</a>
							</Link>
							<Link href="/discover">
								<a title="Discover skills">Discover</a>
							</Link>
							<Link href="/contact">
								<a title="Get in touch">Contact us</a>
							</Link>
						</ul>

						<br />

						<ul className={styles.userLinks}>
							{!user && (
								<>
									<a
										href="/api/auth/signup"
										title="Sign up"
										onClick={() => {
											toggleMenu();
										}}
									>
										Sign up
									</a>
									<a
										href="/api/auth/login"
										title="Log in"
										onClick={() => {
											toggleMenu();
										}}
									>
										Login
									</a>
								</>
							)}
							{user && (
								<>
									<Link href="/profiles/my-profile">
										<a title="View your profile">My profile</a>
									</Link>

									<a
										href="/api/auth/logout"
										title="Log out of your profile"
										onClick={() => {
											toggleMenu();
										}}
									>
										Log out
									</a>
								</>
							)}
						</ul>
					</div>
				)}
			</div>
		</>
	);
}
