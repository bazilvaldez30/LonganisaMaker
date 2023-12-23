import Image from 'next/image'
import FlavorsButton from './components/FlavorsButton'

export default function Home() {
  return (
    <div className='grow flex px-6 py-8'>
      <div className='w-full text-center'>
        <div>
          <span className='min-h-[150px] flex items-center justify-center'>IMAGE LOGO</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <h2>Flavors</h2>
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <FlavorsButton />
      </div>
    </div>
  )
}
