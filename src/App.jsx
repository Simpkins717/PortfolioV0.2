import './App.css';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';

import { useFormik } from 'formik';
import deved from '/dev-ed-wave.png';
import yelpcamp from '/yelpcamp.png';
import dashboard from '/dashboard.png';
import frontend from '/frontend-image.png';
import backend from '/backend-image.png';
import budgetSheet from '/budgetsheet.png';
import budgetSheet2 from '/budgetsheet2.png';
import budgetSheet3 from '/budgetsheet2.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonMailTo from './components/buttonmailto';
export default function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className='bg-white  text-black  dark:bg-gray-900 '>
        <nav className=' p-6 mb-8 flex justify-between sticky top-0 left-0  bg-white z-10 drop-shadow-md dark:bg-gray-800 dark:drop-shadow-2xl'>
          <h1 className='text-xl text-black font-mono dark:text-white'>
            David Simpkins
          </h1>
          <ul className='flex items-center font-mono'>
            <li>
              <a className='px-2 cursor-pointer hover:text-lg text-black hover:text-teal-600 dark:text-white'>
                Home
              </a>
            </li>
            <li>
              <a
                href='#about'
                className='px-2 cursor-pointer hover:text-lg text-black hover:text-teal-600 dark:text-white'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#portfolio'
                className='px-2 cursor-pointer text-black hover:text-lg hover:text-teal-600 dark:text-white'
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='px-2 pr-16 cursor-pointer hover:text-lg text-black hover:text-teal-600 dark:text-white'
              >
                Contact
              </a>
            </li>
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className='cursor-pointer text-xl text-black dark:text-white'
              />
            </li>
          </ul>
        </nav>
        <section className='min-h-screen '>
          <div className='text-center p-8'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>
              David Simpkins
            </h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-teal-200'>
              Full-Stack Developer
            </h3>
            <p className='text-md  py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-teal-50'>
              Full-Stack Developer loving to learn the art of programming and
              design.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-12 p1-3 text-gray-600'>
            <ButtonMailTo
              label={
                <AiFillMail className='cursor-pointer text-black dark:text-white' />
              }
              mailto='mailto:dsimpkins717@gmail.com'
            ></ButtonMailTo>
            <Link
              to={{
                pathname:
                  'https://www.linkedin.com/in/david-simpkins-aa77a0254/',
              }}
              target='_blank'
            >
              <AiFillLinkedin className='text-black dark:text-white' />
            </Link>
            <Link
              to={{ pathname: 'https://github.com/Simpkins717' }}
              target='_blank'
            >
              <AiFillGithub className='text-black dark:text-white' />
            </Link>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96'>
            <img
              id='about'
              src={deved}
              layout='fill'
              objectFit='cover'
              alt=''
              className='pt-10'
            />
          </div>
        </section>
        <section>
          <div className='text-center -mt-32'>
            <h3 className='text-3xl py-1 dark:text-teal-100'>
              Services I offer
            </h3>
            <p className='text-md py-2 text-gray-800 dark:text-teal-50'>
              <span className='text-teal-500'>Remote</span> and/or{' '}
              <span className='text-teal-500'>In Office </span>
              development
            </p>
            <p className='px-6 text-md py-6 leading-8 text-gray-800 dark:text-teal-100'>
              Ut a nisl id ante tempus hendrerit. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. Pellentesque egestas,
              neque sit amet convallis pulvinar, justo nulla eleifend augue, ac
              auctor orci leo non est. Etiam ut purus mattis mauris sodales
              aliquam. Maecenas egestas arcu quis ligula mattis placerat.
            </p>
          </div>
          <div className='lg:flex mt-8 justify-center gap-40 '>
            <div className=' text-center shadow-lg dark:shadow-gray-500 p-10 rounded-xl my-4 w-96 mx-auto'>
              <img
                className='m-auto'
                src={frontend}
                width={200}
                height={200}
                alt=''
              />
              <h3 className='text-lg font-medium pt-8 pb-2 text-teal-500'>
                Frontend Developer
              </h3>
              <p
                className='
              text-gray-800 dark:text-teal-300'
              >
                Development Languages:
              </p>
              <p className=' pt-4 text-gray-800 dark:text-teal-100'>
                React, HTML, CSS, Git, Javascript(ES6+), TypeScript
              </p>

              <h3 className='py-4 text-teal-600'>Dev Tools</h3>
              <div className='text-gray-800 py-1 dark:text-teal-300'>
                <ul>
                  <li>Github</li>
                  <li>Tailwind</li>
                  <li>Bootstrap</li>
                  <li>Terminal</li>
                  <li>Vite</li>
                  <li>Vite</li>
                </ul>
              </div>
            </div>

            <div className='text-center dark:shadow-gray-500 shadow-lg p-10 rounded-xl my-6 w-96 mx-auto'>
              <img
                className='m-auto -mt-10'
                src={backend}
                width={300}
                height={300}
                alt=''
              />
              <h3 className='text-lg font-medium  pb-2 -mt-5 dark:text-teal-600'>
                Backend Developer
              </h3>
              <p
                className='
              text-gray-800 dark:text-teal-300'
              >
                {' '}
                Backend Proficiences:
              </p>
              <p className=' pt-2 text-gray-800 dark:text-teal-100'>
                SQL, NoSQL, Javascript
              </p>

              <h3 className='py-4 text-teal-600'>Dev Tools</h3>
              <div className='text-gray-800 py-1 dark:text-teal-300'>
                <ul>
                  <li>Express</li>
                  <li>Next</li>
                  <li>Node</li>
                  <li>MongoDB</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div id='portfolio' className='text-center pt-20 '>
            <h3 className='text-4xl py-1 dark:text-teal-600'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 px-4'>
              Quisque malesuada placerat nisl. Vestibulum eu odio. In ut quam
              <span className='text-teal-500 dark:text-gray-400'>
                vitae odio lacinia tincidunt.
              </span>{' '}
              Aenean massa. Phasellus gravida semper nisi.
            </p>
          </div>
          <div className='flex flex-col gap-6 px-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1 drop-shadow-md'>
              <p className='text-center text-xl pb-4 dark:text-gray-400'>
                Budget App
              </p>
              <a href='https://budgetsheet2.onrender.com/' target='_blank'>
                <img
                  className='rounded-lg object-cover'
                  width={'100%'}
                  height={'100%'}
                  src={budgetSheet}
                  alt=''
                />
              </a>
            </div>
            <div className='basis-1/3 flex-1 drop-shadow-md'>
              <p className=' pb-4 text-center text-xl dark:text-gray-400'>
                React Admin Dashboard
              </p>
              <a href='https://reactdashboard.onrender.com/' target='_blank'>
                <img
                  className='rounded-lg object-cover'
                  width={'100%'}
                  height={'100%'}
                  src={dashboard}
                  alt=''
                />
              </a>
            </div>
            <div className='basis-1/3 flex-1 drop-shadow-md'>
              <p className=' pb-4 text-center text-xl dark:text-gray-400'>
                YelpCamp
              </p>
              <a href='https://yelpcamp2-umoo.onrender.com/' target='_blank'>
                <img
                  className='rounded-lg object-cover'
                  width={'100%'}
                  height={'100%'}
                  src={yelpcamp}
                  alt=''
                />
              </a>
            </div>
            <div className='basis-1/3 flex-1 drop-shadow-md'>
              <img
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                src={budgetSheet2}
                alt=''
              />
            </div>
          </div>
        </section>
        <section>
          <div className='py-4 text-center'>
            <h3 id='contact' className='text-4xl py-1 dark:text-teal-600 '>
              Contact
            </h3>
            <p className='dark:text-gray-400'>
              Available for all work opportunities
            </p>
            <p className='dark:text-gray-400'>Contact me!</p>
            <ButtonMailTo
              label='Dsimpkins717@gmail.com'
              mailto='mailto:Dsimpkins717@gmail.com'
            />
            <form className='my-4' onSubmit={formik.handleSubmit}>
              <h2 className='mb-2 text-lg dark:text-teal-400'>
                Leave your Email!
              </h2>
              <label htmlFor='email' className='px-2 pr-4 dark:text-teal-400'>
                Email Address
              </label>
              <input
                id='email'
                name='email'
                type='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                className='bg-gray-200 '
              />

              <button
                type='submit'
                className=' ml-4 px-4 dark:text-teal-300 border-x-slate-400 border-y-slate-400'
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
