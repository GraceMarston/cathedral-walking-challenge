import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const completedMiles = 62;
const totalMiles = 62;
const totalSteps = 142791;
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
                 Today I went to East Hills Woods. It is a delightful hilly and bumpy stretch of woodland in Costessey. On the way I went to the co-op to buy some string... I had a plan! I wanted to make a bow and arrow out of sticks and string. We didnt have much time as we arrived later than we hoped and it was getting dark but I still managed to make a cool bow and arrow and it worked!...sort of, well the arrows went like 30cm but me and my brother still had fun.
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
                  Today I went on a car ride to Heacham. We arrived and got some chips and then we went on a long walk along the beach to Hunstanton. On our walk we saw people swimming in the sea! When we got to Hunstanton we went in the arcades and got some hot donuts because all the shops were closed for New Years day. I still had a very fun time though.
                </p>
              </div>
            </div>
           
            <div className='grid lg:grid-cols-3 gap-8'>
              <Image className='mr-8' src='/sunset.jpg' alt='sunset over fields' width='260' height='320'/>
              <div className='col-span-2'>
                <h3 className='text-2xl font-bold'>Dog walk...</h3>
                <p className='font-bold mb-4'>02/01/2023 – 2.70m – 6680 steps</p>
                <p className='text-2xl'>
                  Today I took my dog for a walk over the fields. Me and my Dad left just before the sun went down so we took some great pictures. The sky was very pretty. My dog really enjoyed running around.
                </p>
              </div>
            </div>
           
            <div className='grid lg:grid-cols-3 gap-8'>
              <Image className='mr-8' src='/dog.jpg' alt='cute dog running' width='260' height='320'/>
              <div className='col-span-2'>
                <h3 className='text-2xl font-bold'>Wipe out...</h3>
                <p className='font-bold mb-4'>18/02/2023 – 3.39m – 7948 steps</p>
                <p className='text-2xl'>
                  Today I went on a walk with my Dad and my brother. The walk started off calmly and we were all enjoying the sunset. However, the mood soon changed. As we were walking up a country lane our dog Barley got so excited to see some other dogs he sprinted straight into the back of my brother&apos;s legs. As he fell to the floor I couldnt help but laugh (he was okay). After that we carried on with our lovely walk and had fun in the fields.
                </p>
              </div>
            </div>

            <div className='grid lg:grid-cols-3 gap-8'>
              <Image className='mr-8' src='/puddles.jpg' alt='puddles' width='260' height='320'/>
              <div className='col-span-2'>
                <h3 className='text-2xl font-bold'>Splish Splash Splosh ...</h3>
                <p className='font-bold mb-4'>14/03/2023 – 2.72m – 6049 steps</p>
                <p className='text-2xl'>
                  Today it was very wet outside from the rain yesterday, but I went on a walk anyway. My brother went Pokemon hunting whilst I walked with my Dad and dog. My dog really liked the puddles from the rain. On the farm track we were walking along there were about 10 puddles all in a row and Barley our crazy cockapoo decided to jump in all 10 of them.
                </p>
              </div>
            </div>

            <div className='grid lg:grid-cols-3 gap-8'>
              <Image className='mr-8' src='/UEA.jpg' alt='UEA lake' width='340' height='390'/>
              <div className='col-span-2'>
                <h3 className='text-2xl font-bold'>UEA lakes ...</h3>
                <p className='font-bold mb-4'>26/03/2023 – 6.13m – 13931 steps</p>
                <p className='text-2xl'>
                  Today I went to the UEA lakes for the first time and it was huge! We saw lots of people walking their dogs and lots of students walking around. On our way home we followed the river towards Bowthorpe and in the fields we walked through there were horses roaming free. I was a little scared but they didn&apos;t take any notice of me. 
                </p>
              </div>
            </div>

            <div className='grid lg:grid-cols-3 gap-8'>
              <Image className='mr-8' src='/highlodge.jpg' alt='high lodge forest' width='280' height='320'/>
              <div className='col-span-2'>
                <h3 className='text-2xl font-bold'>High Lodge ...</h3>
                <p className='font-bold mb-4'>16/04/2023 – 5.00m – 11254 steps</p>
                <p className='text-2xl'>
                  Today we went to High Lodge. We arrived around lunchtime so we sat and ate our picnic first. It was very yummy. Me and my brother went on the amazing park, which was very fun. We then headed into the forest. We took a dog ball thrower for our dog. My brother threw the ball around 100 times before finally losing the ball. Luckily we found another ball which was bright blue and squeaked so we would a lot more trouble losing this one! On the way back from our walk we walked past the archery hut and I had to have a go! I am a pro. I got 2 bullseyes not even kidding! My brother didn&apos;t get a bullseye so he was grumpy for the rest of the day. I really enjoyed todays walk.
                </p>
              </div>
            </div>

            <div className='grid lg:grid-cols-3 gap-8'>
              <Image className='mr-8' src='/bb.jpg' alt='rope swing in forest' width='350' height='410'/>
              <div className='col-span-2'>
                <h3 className='text-2xl font-bold'>Secret rope swing ...</h3>
                <p className='font-bold mb-4'>29/04/2023 – 4.09m – 9192 steps</p>
                <p className='text-2xl'>
                  Today my brother went round his friends house so I went on a walk with my Dad. It was very quiet and peaceful until we had to pick up my brother. We decided to go on an extra long walk and go through Cosstessy woods. We saw lots of cute dogs and then at the last minute we decided to take a different route back. We saw lots of animals carved into wood. They were really cool. There were crocodiles, snakes, worms and frogs. The arrival of spring brought out the beautiful bluebells and they looked even prettier in the golden sunlight. But the best bit of the walk was when we found a secret rope swing! It was so fun. Me and my brother spent over half an hour just playing on it. This was by far my favorite walk of my challenge so far.
                </p>
              </div>
            </div>

            <div className='grid lg:grid-cols-3 gap-8'>
              <Image className='mr-8' src='/elmhill.jpg' alt='norwich cathedral' width='350' height='410'/>
              <div className='col-span-2'>
                <h3 className='text-2xl font-bold'>City walk ...</h3>
                <p className='font-bold mb-4'>30/04/2023 – 4.59m – 10078 steps</p>
                <p className='text-2xl'>
                  Today I took my Mum to work and then me, my Dad and my brother went on a walk around the city. We went down Elm Hill which is the oldest road in Norwich. There were lots of old buildings which have been used as the filming location for a couple of movies that I have seen. The road was full of antique shops and one had lots of old coins up the window. We also went in Norwich Cathedral and the archway we walked through had faces on the ceiling. The inside of the Cathedral was very pretty with all the windows and we saw all the Vicars and Bishops getting ready for the sunday service. Todays walk was very interesting.
                </p>
              </div>
            </div>

            <div className='grid lg:grid-cols-3 gap-8'>
              <Image className='mr-8' src='/spooky-road.jpg' alt='spooky road' width='350' height='410'/>
              <div className='col-span-2'>
                <h3 className='text-2xl font-bold'>Spooky walk ...</h3>
                <p className='font-bold mb-4'>07/05/2023 – 3.07m – 8327 steps</p>
                <p className='text-2xl'>
                  Today the weather was warm and dry although it had rained really heavily the night before and the roads were still wet. Me and my Dad talked about ghost stories as my Dad had been listening to an new podcast about the supernatural. It was scary but I just needed to hear more ... he's hoping I will sleep well tonigh! HAHAHAHA!
                </p>
              </div>
            </div>

            <h2 className='text-7xl text-amber-800 text-center font-bold'>My DofE experience</h2>

            <div className='grid lg:grid-cols-3 gap-8'>
              <Image className='mr-8' src='/me.jpg' alt='My DofE experience' width='350' height='410'/>
              <div className='col-span-2'>
                <h3 className='text-2xl font-bold'>Day 1 !</h3>
               <p className='text-2xl'>
                  OMG what a journey! This was way crazier than I expected. On the first day we got there we got lost about 5 times! 
                  We found the way though. Until we got stuck at a golf course for about 15 minutes with another group. It was funny 
                  though. Eventually some teachers found us and my group got to eat lunch early!!! We then carried on our jouney 
                  although we were already tired and wanted to go home BUT we persevered. Luckily, we bumped into another group so we 
                  decided to keep eachother company and walk together. I shared out all my buiscuits and everyone enjoyed a little 
                  energy boost, thanks to me. Then we sat down for a quick little break and had some water a snacks. Next thing I 
                  know another member of the groups nose is gushing with blood thanks alot &ldquo;other member of the group&ldquo; but I was a 
                  nice friend and stayed with her until the teachers arrived. Unfortunately we didnt get to finish our first walk 
                  because our group was too small to go alone with only three of us so we all hopped in the bus and went back to the 
                  campsite. Not long after all the groups were back and we all played some nice games together. After we had played 
                  for hours I had to cook my dinner, pasta from a bag. Personally, I think I did very well as I only burnt a little 
                  bit of it and it actually was edible. Then we all started getting ready for bed when all of a sudden &ldquo;somebody's&ldquo; 
                  nose starts gushing with blood AGAIN!!! But bless her it was a hard time. Then we went to bed and had a terrible 
                  sleep.
                </p>
              </div>
            </div>

            <div className='grid lg:grid-cols-3 gap-8'>
              <Image className='mr-8' src='/me2.jpg' alt='My DofE experience' width='350' height='410'/>
              <div className='col-span-2'>
                <h3 className='text-2xl font-bold'>Day 2 !</h3>
               <p className='text-2xl'>
                  YAYYY day 2 ! Great start to the day we all woke up last and we all left last. I had an apple and some dry cherios 
                  for breakfast at the start of our walk. We did alot better this day navigating but we still all took turns. We 
                  started walking through nice peaceful fields but ended up having to walk up a huge main road. However we did so, 
                  safefly. I got stung by loads of stinging nettles this day. However this wasnt the wost pain i felt. I was walking 
                  along the road nice and calmly when I saw a farm sign with the same name as my road and I must have gotten a bit 
                  too excited because next thing I know I get a sharp pain in my arm and I thought &ldquo;what wass that?&ldquo;. Then I look 
                  down and I see a poor little bee crawling out of my tshirt sleeve. I was very upset until someone in the group 
                  game me a plaster, which made me feel a little bit better, but I still felt bad for the bee. However I found it 
                  so bizarre because earlier we had walked through a whole forrest full of bees and none of them stung me but when 
                  we were all alone on a little roud one did. What the Heck??? Anyways after that I got my photo taken by one of my 
                  friends and we carried on. But a magical experience happend to all of us. Just as we were going to give up I wished 
                  for a miricle, for some energy THEN... its like the universe knew! We all suddenly got a bust of energy we walked 
                  for ages and when we finally sat down for a drink a baby deer just ran across the road right infront of us. Then 
                  we continued and found a lucky horse shoe on the ground. It was like it was waiting for us! The next thing we knew 
                  we were almost back and when we eventally arrived back at the campsite we got to have a nice, relaxing sit down. 
                  And we werent last !!!! 
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
