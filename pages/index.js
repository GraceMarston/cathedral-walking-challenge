import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const completedMiles = 31.34;
const totalMiles = 62;
const totalSteps = 57094;
const progress = completedMiles / totalMiles * 100;      

export default function Home() {
  return (
    <div className='flex justify-center font-serif'>
      <div className= 'flex w-full max-w-7xl px-8'> 
        <div className= 'w-full'>
          <div className= 'flex justify-between py-8' id='navigation'>
            <Image src='/logo.png' alt='Cathedral Virtual Walk' width='83' height='89' />
            <ul className='inline font-bold text-amber-800'>
              <li className= 'inline mr-8'><a href='#about'>About</a></li>
              <li className= 'inline mr-8'><a href='#progress'>Progress</a></li>
              <li className= 'inline'><a href='#blog'>Blog</a></li>
            </ul>
          </div>

          <div className='grid lg:grid-cols-2 gap-8 mb-20' id='about'>
            <div className='flex flex-col justify-between py-28'>
              <h1 className='text-6xl font-bold'>My Walking Challenge</h1>
              <span className='text-2xl font-bold'>Every step of the way...</span>
              <h2 className='text-3xl font-bold underline mt-8'>About</h2>
              <p className='text-xl'>As part of my skills challenge for the DofE, I plan to walk the distance between Norwich and Cambridge cathedrals and you will be able to see my progress every step of the way.</p>
            </div>
            <div className='flex justify-end'>
              <Image src='/standing-in-autumn-leaves.png' alt='' width='503' height='632' />
            </div>
          </div>

          <div className='bg-gray-200 rounded-xl my-5 py-8 px-8' id='progress'>
            <h2 className='text-3xl text-amber-800 font-bold underline text-center'>Progress</h2>

            <div className='flex lg:justify-between'>
              <Image src='/logo.png' alt='norwich cathedral' width='83' height='89'/>
              <span className='text-xl font-bold'>Total steps: {totalSteps}</span>
              <span className='text-xl font-bold'>{completedMiles} / {totalMiles} miles</span>
              <Image src='/logo.png' alt='cambridge cathedral' width='83' height='89'/>
            </div>

            <div className='w-full bg-gray-500 rounded-full mt-8'>
              <div className='bg-amber-800 text-xs leading-none rounded-l-full h-3' style={{width: `${progress}%`}}></div>
            </div>
          </div>

          <div className='my-10 grid gap-20' id='blog'>
            <h2 className='text-3xl text-amber-800 font-bold underline text-center'>Blog</h2>

            <div className='grid lg:grid-cols-3 gap-8'>
              <Image className='mr-8' src='/autumn-trees.png' alt='autumn trees' width='227' height='340'/>
              <div className='col-span-2'>
                <h3 className='text-2xl font-bold'>It all starts here...</h3>
                <p className='font-bold mb-4'>13/11/2022 – 4.73m – 11647 steps</p>
                <p className='text-2xl'>
                For my first walk today I walked through Costessey woods. Costessey woods is very popular and some people have said “This is a lovely place to walk and especially in the autumn when the colours are so beautiful” and “Small but beautiful woodland area”. The floors of the forest were painted with reds and oranges of the autumn leaves which made my walk even more enjoyable. In total I done 11647 steps and I knocked 4.73 miles off my target of 63 miles!
                </p>
              </div>
            </div>

            <div className='grid lg:grid-cols-3 gap-8'>
              <Image className='mr-8' src='/rain.png' alt='rainy window' width='227' height='340'/>
              <div className='col-span-2'>
                <h3 className='text-2xl font-bold'>Rainy day...</h3>
                <p className='font-bold mb-4'>28/11/2022 – 5.02m – 10529 steps</p>
                <p className='text-2xl'>
                For my second walk,  today I wanted to walk outside but it was raining so I decided to walk on my treadmill. At first I found it quite hard but I soon got into it. I definitely prefer to walk outside, inside is not as fun and it took me 3 hours.
                </p>
              </div>
            </div>

            <div className='grid lg:grid-cols-3 gap-8'>
              <Image className='mr-8' src='/forrest-photo2.jpg' alt='photo of forrest' width='227' height='340'/>
              <div className='col-span-2'>
                <h3 className='text-2xl font-bold'>Bow and arrow...</h3>
                <p className='font-bold mb-4'>03/12/2022 – 3.00m – 7381 steps</p>
                <p className='text-2xl'>
                 Today I went to East Hills Woods it is a delightful hilly and bumpy stretch of woodland in Costessey. On the way I went to the co-op to buy some string, I had a plan! I wanted to make a bow and arrow out of sticks and string. We didnt have much time as we arrived later than we hoped and it was getting dark but i still managed to make a cool bow and arrow and it worked!...sort of, well the arrows went like 30cm but me and my brother still had fun.
                </p>
              </div>
            </div>

            <div className='grid lg:grid-cols-3 gap-8'>
              <Image className='mr-8' src='/road-photo.jpg' alt='country road' width='227' height='340'/>
              <div className='col-span-2'>
                <h3 className='text-2xl font-bold'>Rat disaster!!!</h3>
                <p className='font-bold mb-4'>24/12/2022 – 2.90m – 6686 steps</p>
                <p className='text-2xl'>
                Todays walk I went to the fields near my house. I had mixed emotions about the walk though. The weather was nice, it was a change from the snow and rain. My dog Barley enjoyed drinking and jumping in the muddy puddles. I have broken up from school and its Christmas tomorrow which I am so excited about. However, my walk took a turn for the worst. My biggest fear.... a rat! At first we thought it was dead so we were sad and walked around it but then when we looked back it started unravelling and I freaked out. I sprinted faster than my brother who is the fastest in the family. I WAS GONE!
                </p>
              </div>
            </div>

            <div className='grid lg:grid-cols-3 gap-8'>
              <Image className='mr-8' src='/27th.jpg' alt='sunset over fields' width='270' height='390'/>
              <div className='col-span-2'>
                <h3 className='text-2xl font-bold'>The walk with the swing...</h3>
                <p className='font-bold mb-4'>26/12/2022 – 4.61m – 11625 steps</p>
                <p className='text-2xl'>
                  Today I went to the big field at the end of the Bowthorpe Industrial Estate. It is a huge field about x10 the size of Breckland Park and a great place for my dog to run around. The other thing that I discoverd was a swing on a huge oak tree. Me and my family loved it, but I dont think my dog did. I think he was worried about me because everytime I went on the swing he would jump up and bark to try and get me off it. We could also see some rabbits in the distance. It was a very fun walk.
                </p>
              </div>
            </div>

            <div className='grid lg:grid-cols-3 gap-8'>
              <Image className='mr-8' src='/streetlight.jpg' alt='streetlight at night' width='227' height='340'/>
              <div className='col-span-2'>
                <h3 className='text-2xl font-bold'>Night time in Costessey...</h3>
                <p className='font-bold mb-4'>29/12/2022 – 3.67m – 9226 steps</p>
                <p className='text-2xl'>
                  Today I just went on a quick walk in the evening with my Dad. As we started our walk the sun was just going down. We could just see the end of a lovely sunset. On the last stretch of my walk, just as I passed The Harte pub, the street lights were off and the road was pitch black. I was a little bit scared, especially as we were walking past a creepy forest so I refused to walk any further until my Dad put his phone light on. Luckily, the street lights were only off for a small section.
                </p>
              </div>
            </div>
         
           <div className='grid lg:grid-cols-3 gap-8'>
              <Image className='mr-8' src='/beach.jpg' alt='beach' width='300' height='370'/>
              <div className='col-span-2'>
                <h3 className='text-2xl font-bold'>Happy New Year...</h3>
                <p className='font-bold mb-4'>01/01/2023 – 4.71m – 12238 steps</p>
                <p className='text-2xl'>
                  Today I went on a car ride to heacham. We arived and got some chips and then we went on a long walk along the beach to hunstanton. On our walk we saw people swimming in the sea! When we got to hunstanton we went in the arcades and got some hot donuts because all the shops were closed for new years day. I still had a very fun time though.
                </p>
              </div>
            </div>
           
            <div className='grid lg:grid-cols-3 gap-8'>
              <Image className='mr-8' src='/sunset.jpg' alt='sunset over fields' width='260' height='320'/>
              <div className='col-span-2'>
                <h3 className='text-2xl font-bold'>Dog walk...</h3>
                <p className='font-bold mb-4'>02/01/2023 – 2.70m – 6680 steps</p>
                <p className='text-2xl'>
                  Today I took my dog for a walk over the fields. Me and my dad left just before the sun went down so we took some great pictures. The sky was very pretty. My dog really enjoyed running around.
                </p>
              </div>
            </div>


          </div>

          <div className='flex flex-col justify-center text-center h-16 bg-amber-800 text-white'>
            <small>Copywrite - Grace Marston - 2022</small>
          </div>
        </div>
      </div>
    </div>
  )
}
