'use client'
import styles from '@/components/styles.module.css';
import React from 'react';

const CallBlock = () => {
    return (
        <div className={'sm:grid-cols-2 justify-between justify- grid items-center'}>
            <h4 className={`text-2xl leading-6 sm:text-3xl sm:leading-8 md:text-4xl  md:leading-10 font-black text-gray-900 dark:text-gray-100 mb-6`}>
                Поработаем вместе? Оставляйте заявку, а мы бесплатно проконсультируем, расскажем о
                процессах, подготовим КП
            </h4>
            <div className="grid justify-center">
                <div className="square twitter md:size-[250px] size-[150px]">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div
                        className="md:text-xl text-lg content text-black dark:text-white dark:hover:text-black hover:text-white">
                        <a className='border-white px-4 py-2 md:px-6 md:py-3 border-2 dark:border-gray-950'
                           href="/contacts">Свяжитесь с нами</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallBlock
