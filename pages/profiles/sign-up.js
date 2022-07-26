import Head from "next/head";
import SignUpForm from "../../src/components/SignUpForm";
import styles from "../../src/components/SignUpForm/signUpForm.module.css";
import Header from "../../src/components/Header";
export default function SignUp() {
	return (
		<div className={styles.signUpContainer}>
			<Head>
				<title>SkillEx | Sign Up</title>
				<meta name="description" content="SkillEx sign up page" />
			</Head>
			<Header text="Sign Up" colour="terraCotta" /> <SignUpForm />
		</div>
	);
}
