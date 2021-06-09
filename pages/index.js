import Image from 'next/image'
import Layout from '../components/layout'

export default function Nav() {
  return (
    <Layout>
      <div className="flex flex-row m-8 justify-between items-center">
        <div className="flex-1 space-y-10">
          <div className="text-5xl">
            <h1>Design the ExO Canvas
          In order to ensure your organization will be set up to adopt the ExO model </h1>
          </div>
          <div className="space-x-5">
            <button className="bg-yellow-400 text-xl hover:bg-yellow-300 text-purple-800 py-2 px-4 rounded">How it works?</button>
            <button className="bg-red-600 text-xl hover:bg-red-500 text-gray-200 py-2 px-4 rounded">Launch your project</button>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="/images/hero.png"
            alt="hero image"
          />
        </div>
      </div>
    </Layout>
  )
}