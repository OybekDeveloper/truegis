import React from 'react'
import { MasterCard, Gillette, LouisVuitton, McDonald, Starbucks, card1, card2, card3, card4, clientback } from './client-img'
import './clients.scss'
const clients = [
    {
        id: 1,
        title: "Gillette",
        url: Gillette
    },
    {
        id: 2,
        title: "Louis Vuitton",
        url: LouisVuitton
    },
    {
        id: 3,
        title: "MasterCard",
        url: MasterCard
    },
    {
        id: 4,
        title: "McDonald's",
        url: McDonald
    },
    {
        id: 5,
        title: "Starbucks",
        url: Starbucks
    },
    {
        id: 1,
        title: "Gillette",
        url: Gillette
    },
    {
        id: 2,
        title: "Louis Vuitton",
        url: LouisVuitton
    },
    {
        id: 3,
        title: "Gillette",
        url: Gillette
    },
    {
        id: 4,
        title: "McDonald's",
        url: McDonald
    },
    {
        id: 5,
        title: "Starbucks",
        url: Starbucks
    },
]
const cards = [
    {
        id: 1,
        title: 'Loyihani qabul qilib olish jarayonida aniq kelishuv',
        url: card1,
    },
    {
        id: 2,
        title: 'Har bir loyihani tizimli tashkillashtirish va so’ngi texnologiyalar bilan ishlab chiqish',
        url: card2,
    },
    {
        id: 3,
        title: 'Qabul qilib olingan loyihalarni kelishilgan vaqtda yetkazib berish',
        url: card3,
    },
    {
        id: 4,
        title: 'Har bitta loyihani alohida qo’llab quvvatlash',
        url: card4,
    },
]
const Clients = () => {
    return (
        <div id='clients' className='clients w-full mx-auto pt-[100px] flex flex-col items-center mb-[100px]'>
            <h1 className='text-[32px] font-[600]'>Bizning mijozlarimiz</h1>
            <div className='pt-[64px]  overflow-x-scroll carusel whitespace-nowrap w-full'>
                {clients.map(item => (
                    <div key={item.id} className='inline-flex gap-[12px] w-[300px]'>
                        <div className='flex flex-row justify-center items-center gap-[12px]'>
                            <img className='w-[40px] h-[40px]' src={item.url} alt={item.title} />
                            <h1 className='text-[23px] font-[500]'>{item.title}</h1>
                        </div>
                    </div>
                ))}
            </div>
            <article className='relative flex flex-col items-center mt-[200px] gap-[64px]'>
                <div className='absolute top-10 left-20 z-[-1]'>
                    <img className='w-[440px]' src={clientback} alt="back" />
                </div>
                <h1 className='text-[32px]'>Nima uchun bizni tanlashadi?</h1>
                <div className="card-container flex gap-[24px]">
                    {cards.map(item => (
                        <div className="card flex flex-col gap-[32px] p-[32px] w-[300px]" key={item.id}>
                            <img className='w-[56px] h-[56px]' src={item.url} alt={item.title} />
                            <h1>{item.title}</h1>
                        </div>
                    ))}
                </div>
            </article>
        </div>
    )
}

export default Clients