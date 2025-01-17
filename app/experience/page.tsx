"use client"
import experienceData from "@/.fake/experience"
import Link from 'next/link'

const Experience = () => {
  return (
    <div className="">
      <h1 className='text-2xl sm:ml-8 px-2'>
        <span className="heading">My </span>
        <span className='text-primary'>Experience</span>
      </h1>

      <div className="mx-3 sm:mx-6">
        <div className="cards-container py-4 my-4 sm:grid-cols-3 px-4 sm:p1">
          {experienceData.map((exp, index) => (
            <Link href="#" className="h-full" key={index}>
              <div className="card h-full shadow cursor-pointer hover:bg-secondary shadow-xl bg-secondary/35 text-foreground flex flex-col  border border-secondary/50">
                {exp.img &&
                  <div className={
                    `rounded-xl inner-shadow 
                  my-auto flex 
                  flex-col justify-center`}>
                    <img src={exp.img.src} />
                  </div>}
                <h2 className="card-title text-primary">{exp.title}</h2>
                <p className="card-duration">{exp.duration}</p>
                <p className="card-description">{exp.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <style jsx>{`
        .container {
          width: 80%;
        }

        .heading {
          text-align: center;
          margin-bottom: 40px;
        }

        .cards-container {
          display: grid;
          gap: 20px;
        }

        .card {
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: bold;
        }

        .card-duration {
          font-size: 1rem;
        }

        .card-description {
          font-size: 1rem;
          margin-top: 10px;
        }

        .graph-container {
        }
      `}</style>
      </div></div>
  );
};

export default Experience;