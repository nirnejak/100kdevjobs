import * as React from "react"

import * as motion from "motion/react-client"

import { getMetadata } from "@/utils/metadata"
import { BASE_TRANSITION } from "@/utils/animation"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms/Accordion"

export const metadata = getMetadata({
  path: "/faq/",
  title: "FAQ | 100k Dev Jobs",
  description: "Frequently asked questions about 100k Dev Jobs",
})

const FAQPage: React.FC = () => {
  return (
    <main className="pt-48">
      <section className="relative pb-44">
        <motion.h1
          initial={{ translateY: 10, opacity: 0, filter: "blur(5px)" }}
          animate={{ translateY: 0, opacity: 1, filter: "none" }}
          transition={{ ...BASE_TRANSITION, duration: 0.2, delay: 0 }}
          className="
            text-center text-4xl/tight font-bold tracking-tighter text-zinc-300
          "
        >
          Frequently Asked Questions
        </motion.h1>
      </section>

      <section>
        <motion.div
          initial={{ translateY: 10, opacity: 0, filter: "blur(5px)" }}
          animate={{ translateY: 0, opacity: 1, filter: "none" }}
          transition={{ ...BASE_TRANSITION, duration: 0.2, delay: 0.1 }}
          className="
            mx-auto w-full max-w-3xl px-4
            md:px-0
          "
        >
          <h2 className="mb-4 text-xl font-bold tracking-tight text-zinc-200">
            For Developers
          </h2>
          <Accordion
            type="single"
            collapsible
            className="mb-20 bg-zinc-800 px-1.5 pt-1.5 pb-0.5 text-zinc-200"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>What is 100K Dev Jobs?</AccordionTrigger>
              <AccordionContent>
                100K Dev Jobs is a premium website that gives you access to
                exclusive high-paying job listings in the tech across USA,
                Europe and India.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Does it cost anything for developers to use the platform?
              </AccordionTrigger>
              <AccordionContent>
                No, my platform is completely free for developers. I believe
                that finding a great job should be accessible to everyone,
                without any fees or hidden costs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Why do you focus only on high-paying jobs?
              </AccordionTrigger>
              <AccordionContent>
                I want to connect talented developers worldwide with top-tier
                opportunities that match their skills and experience. All jobs
                listed on the platform pay $100K or more, so you know you’re
                browsing premium offers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Do I need to sign up to browse jobs?
              </AccordionTrigger>
              <AccordionContent>
                You can browse jobs without signing up. However, creating an
                account allows you to save jobs, apply directly, and receive
                personalized recommendations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Will you ever charge developers for using the platform?
              </AccordionTrigger>
              <AccordionContent>
                No, I&apos;m committed to never charging developers. My focus is
                on providing a great experience for you while monetizing through
                employers because they can afford and have budget and every team
                needs talented people.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                Are there any guarantees of getting a job?
              </AccordionTrigger>
              <AccordionContent>
                While I provide access to exclusive job listings and early
                notifications, I cannot guarantee job placement. Your success
                depends on various factors including your skills, experience,
                and how well you match the job requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>
                How do you ensure the quality of job listings?
              </AccordionTrigger>
              <AccordionContent>
                I manually vet every job posting to ensure they meet the
                criteria of being high-paying and from reputable employers.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={{ translateY: 10, opacity: 0, filter: "blur(5px)" }}
          animate={{ translateY: 0, opacity: 1, filter: "none" }}
          transition={{ ...BASE_TRANSITION, duration: 0.2, delay: 0.2 }}
          className="
            mx-auto w-full max-w-3xl px-4
            md:px-0
          "
        >
          <h2 className="mb-4 text-xl font-bold tracking-tight text-zinc-200">
            For Employers
          </h2>
          <Accordion
            type="single"
            collapsible
            className="mb-20 bg-zinc-800 px-1.5 pt-1.5 pb-0.5 text-zinc-200"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How much does it cost to post a job?
              </AccordionTrigger>
              <AccordionContent>
                I offer flexible pricing plans for employers based on the number
                of listings and the features you need to attract top talent.
                Contact me for detailed pricing information.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Why should I list my job here?
              </AccordionTrigger>
              <AccordionContent>
                I specialize in connecting employers with highly qualified
                developers seeking high-paying opportunities. My focus on
                premium job listings ensures that your posting reaches the right
                candidates.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I feature my job posting?</AccordionTrigger>
              <AccordionContent>
                Yes, I offer options to feature job listings for increased
                visibility and better targeting to attract the best developers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Do you offer bulk pricing for multiple job listings?
              </AccordionTrigger>
              <AccordionContent>
                Yes, I provide custom packages for employers looking to post
                multiple job openings. Reach out for more information on bulk
                pricing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                What’s the process for posting a job?
              </AccordionTrigger>
              <AccordionContent>
                It’s simple. Sign up as an employer, fill out the job details,
                and select a pricing plan. Once the payment is processed, your
                job will go live on the platform.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </section>
    </main>
  )
}

export default FAQPage
