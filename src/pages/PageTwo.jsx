import ExperienceCard from '../components/ExperienceCard'
import AddTechStack from '../components/AddTechStack'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import resume from '../resume'

const PageTwo = () => {
  const {experienceOne, experienceTwo, addTech} = resume

  return (
    <div className = 'PageTwo'>
      <div className = { style.body }>
        {/* Experience */}
        <span className = 'pb-8 text-md font-bold text-green-400 flex justify-center'>{ `/** Experience */` }</span>
        <div className = 'space-x-2 flex justify-center'>
          { experienceOne.map((data, index) => (
              <ExperienceCard key = { index } experience = { data } />
          )) }
        </div>
        <div className = 'space-x-2 flex justify-center'>
          { experienceTwo.map((data, index) => (
              <ExperienceCard key = { index } experience = { data } />
          )) }
          <div className = 'flex flex-col space-y-2'>
            <div className = 'flex flex-col py-2 space-y-1 bg-gray-800 w-80 h-16 shadow'>
              <div className = 'px-2 flex justify-left items-center'>
                <div className = 'rounded bg-gray-900 w-16 h-6 flex justify-center items-center'>
                  <img className = 'w-6' src = { `/logo/laptop-house.png` } alt = { `company_4_logo` } />
                </div>
                <div className = 'px-2 flex items-center'>
                  <span className = 'font-bold text-gray-200'>{ 'Company 4,' }</span>
                  <span className = 'px-1 text-gray-300 text-sm font-semibold'>{ 'Position' }</span>
                </div>
              </div>
              <div className = 'px-3 py-1 text-gray-400 flex flex-col'>
                <span className = 'text-xs'>{ 'Jan 2018 - Dec 2018' }</span>
              </div>
            </div>
            <div className = 'flex flex-col py-2 space-y-1 bg-gray-800 w-80 h-16 shadow'>
              <div className = 'px-2 flex justify-left items-center'>
                <div className = 'rounded bg-gray-900 w-16 h-6 flex justify-center items-center'>
                  <img className = 'w-6' src = { `/logo/laptop-house.png` } alt = { `company_5_logo` } />
                </div>
                <div className = 'px-2 flex items-center'>
                  <span className = 'font-bold text-gray-200'>{ 'Company 5,' }</span>
                  <span className = 'px-1 text-gray-300 text-sm font-semibold'>{ 'Position' }</span>
                </div>
              </div>
              <div className = 'px-3 py-1 text-gray-400 flex flex-col'>
                <span className = 'text-xs'>{ 'Jan 2017 - Dec 2017' }</span>
              </div>
            </div>
          </div>
        </div>
        {/* Additional Technology Stack */}
        <span className = { style.title }>{ `/** Additional Technology Stack */` }</span>
        <div className = 'grid grid-cols-2 grid-rows-2 gap-3 lg:mx-96'>
          { addTech.map((data, index) => (
            <AddTechStack key = { index } addTech = { data }/>
          )) }
        </div>
        <div className = 'grid grid-cols-2 gap-2 lg:mx-96'>
        {/* Education */}
          <div className = 'space-y-4'>
            <span className = { style.title }>{ `/** Education */` }</span>
            <div className = 'flex flex-col py-2 space-y-1 bg-gray-800 w-76 h-22 shadow'>
              <div className = 'px-2 flex justify-left items-center'>
                <div className = 'rounded bg-gray-900 w-16 h-7 flex justify-center items-center'>
                <FontAwesomeIcon className = 'text-gray-400' icon = 'graduation-cap' size = 'lg' />
                </div>
                <div className = 'flex items-center'>
                  <span className = 'px-2 font-bold text-gray-200'>College Name</span>
                </div>
              </div>
              <div className = 'px-3 py-1 flex flex-col'>
                <span className = 'text-gray-300 text-sm font-semibold'>Degree</span>
                <span className = 'text-gray-400 text-xs'>2016</span>
              </div>
            </div>
          </div>
        {/* Certification */}
        <div className = 'space-y-4'>
            <span className = { style.title }>{ `/** Certification */` }</span>
            <div className = 'flex flex-col py-2 space-y-1 bg-gray-800 w-76 h-22 shadow'>
              <div className = 'px-2 flex justify-left items-center'>
                <div className = 'rounded bg-gray-900 w-16 h-7 flex justify-center items-center'>
                  <FontAwesomeIcon className = 'text-gray-400' icon = 'graduation-cap' size = 'lg' />
                </div>
                <div className = 'flex items-center'>
                  <span className = 'px-2 font-bold text-gray-200'>School of Certification</span>
                </div>
              </div>
              <div className = 'px-3 py-1 flex flex-col'>
                <span className = 'text-gray-4000 text-sm font-semibold'>Course name</span>
                <span className = 'text-gray-400 text-xs'>2016</span>
              </div>
            </div>
          </div>
        </div>
        <div className = 'pt-12 lg:mx-96'>
          <Footer resume = {resume} />
        </div>
      </div>
    </div>
  )
}

const style = {
  body: 'space-y-2 p-14 text-white bg-gray-900 min-h-screen',
  title: 'py-8 text-md font-bold text-green-400 flex justify-center'
}

export default PageTwo
