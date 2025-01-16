"use client"

// pages/experience.js
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, LineElement, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, LineElement, PointElement, Legend);

const map = {
    ['front-end']: {
        skills: ['React.js', 'Angular', 'Next.js']
    },
    ['back-end']: {
        skills: ['Springboot', 'Node.js', 'ASP.Net', "Django"]
    },
    ['devops']: {
        skills: ['Azure', 'AWS', 'GCP']
    }
}

const Experience = () => {
    const skillData = [{
        title: 'Front-end',
        description: map['front-end'].skills.toString(),
        duration: ''
    }, {
        title: 'Back-end',
        description: map['back-end'].skills.toString(),
        duration: ''
    }, {
        title: 'Dev Ops',
        description: map['devops'].skills.toString(),
        duration: ''
    }]

    const skillsData = {
        labels: [
            'Front-end',
            'Back-end',
            'Dev ops',
            'Best Practices',
            'Generative AI',
            'GIS',
            'Buisiness',
            'ML',
            'Graphic Design',
            'Communication'
        ],
        datasets: [
            {
                label: 'Skill Proficiency',
                data: [100, 100, 80, 95, 95, 85, 50, 80, 90, 100], // The skill proficiency (out of 100)
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Skills',
                },
            },
            y: {
                min: 0,
                max: 100,
                title: {
                    display: true,
                    text: 'Proficiency (%)',
                },
            },
        },
    };

    return (
        <div className="container">

            <div className="graph-container">
                <h1 className='text-2xl'>
                    <span className="heading">Skill </span><span className='text-primary'>Profiency</span>
                </h1>
                <Line data={skillsData} options={options} className='max-sm:overflow-x-scroll' />
            </div>
            <h1 className='text-2xl'>
                <span className="heading">My </span><span className='text-primary'>Skills</span>
            </h1>

            <div className="cards-container">
                {skillData.map((exp, index) => (
                    <div key={index} className="card bg-secondary/35 text-foreground">
                        <h2 className="card-title text-primary">{exp.title}</h2>
                        <p className="card-duration">{exp.duration}</p>
                        <p className="card-description">{exp.description}</p>
                    </div>
                ))}
            </div>
            <h1 className='text-2xl'>
                <span className="heading">My </span><span className='text-primary'>Experience</span>
            </h1>
            <style jsx>{`
        .container {
          width: 80%;
          margin: 0 auto;
          padding: 20px;
          font-family: Poppins;
        }

        .heading {
          text-align: center;
          margin-bottom: 40px;
        }

        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
          margin-top: 40px;
        }
      `}</style>
        </div>
    );
};

export default Experience;