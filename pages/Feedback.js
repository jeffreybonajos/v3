import Layout from "../components/Layout";
import { authInitialProps } from "../lib/Auth";
import Link from "next/link";

export default function Feedback(props) {
  return (
    <Layout title="Index" {...props}>
        <strong>Feedback</strong>
        <strong>Feedback</strong>
        <p><span>Welcome to the <span><strong>AwesomeOS</strong> </span>Team!</span></p>
        <span>At AwesomeOS we believe that our Team Members that represent the company are the most vital factors to the company’s success. This means YOU!</span>
        <span>Why do we work? We all work for the experience and to get paid a salary. Our clients essentially pay for our salaries, our offices, our outings and events. If we keep our clients happy and </span>

    </Layout>
  );
}

Feedback.getInitialProps = authInitialProps(true);
