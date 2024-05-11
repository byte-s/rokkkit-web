'use client'
import styles from '@/components/styles.module.css';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import InputMask from "react-input-mask";

const Form = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "52353844-7876-4abb-98f6-43d516d6d770");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        toast.success("Заявка отправлена успешно");
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <div className={"space-y-12 ml-0"}>
                <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="name" className="font-semibold block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">Ваше имя</label>
                            <div className="mt-2">
                                <input required type="text" name="name" id="name" placeholder="Иван" autoComplete="name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 dark:focus:ring-gray-100 sm:text-sm sm:leading-6 dark:bg-gray-500 dark:text-gray-100"/>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="email" className="font-semibold block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">Ваша почта</label>
                            <div className="mt-2">
                                <input required id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 dark:focus:ring-gray-100 sm:text-sm sm:leading-6 dark:bg-gray-500 dark:text-gray-100"/>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="company" className="font-semibold block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">Организация</label>
                            <div className="mt-2">
                                <input required type="text" name="company" id="company" placeholder="ООО РОККИТ" autoComplete="company" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 dark:focus:ring-gray-100 sm:text-sm sm:leading-6 dark:bg-gray-500 dark:text-gray-100"/>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="price" className="font-semibold block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">Номер телефона</label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <InputMask mask="+7 (999) 999-99-99" required autoComplete='phone' type="text" name="phone" id="phone" className="block w-full rounded-md border-0 py-1.5  pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 dark:focus:ring-gray-100 sm:text-sm sm:leading-6 dark:bg-gray-500 dark:text-gray-100" placeholder="+7 (999) 999-99-99"/>
                                <div className="absolute inset-y-0 right-0 flex items-center"></div>
                            </div>
                        </div>
                        <fieldset className='sm:col-span-3'>
                            <legend className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">Какую услугу хотели бы получить?</legend>
                            <div className="mt-3 space-y-2">
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input id="web" name="web" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-900 dark:bg-gray-500"/>
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label htmlFor="web" className="font-medium text-gray-900 dark:text-gray-100">Разработку сайта</label>
                                    </div>
                                </div>
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input id="crm" name="crm" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-900 dark:bg-gray-500"/>
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label htmlFor="crm" className="font-medium text-gray-900 dark:text-gray-100">Внедрение CRM</label>
                                    </div>
                                </div>
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input id="design" name="design" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-900 dark:bg-gray-500"/>
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label htmlFor="design" className="font-medium text-gray-900 dark:text-gray-100">Разработку дизайна</label>
                                    </div>
                                </div>
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input id="other" name="other" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-900 dark:bg-gray-500"/>
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label htmlFor="other" className="font-medium text-gray-900 dark:text-gray-100">Прочее...</label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className='sm:col-span-3'>
                            <legend className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">Планиуремый бюджет</legend>
                            <div className="mt-3 space-y-2">
                                <div className="flex items-center gap-x-3">
                                    <input id="less-100k" name="budget" type="radio" className="h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-900 dark:bg-gray-500"/>
                                    <label htmlFor="less-100k" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">Меньше 100 000 руб.</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="100-200k" name="budget" type="radio" className="h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-900 dark:bg-gray-500"/>
                                    <label htmlFor="100-200k" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">100 000 - 199 000 руб.</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="200-300k" name="budget" type="radio" className="h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-900 dark:bg-gray-500"/>
                                    <label htmlFor="200-300k" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">200 000 - 299 000 руб.</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="300-400k" name="budget" type="radio" className="h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-900 dark:bg-gray-500"/>
                                    <label htmlFor="300-400k" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">300 000 - 399 000 руб.</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="400-500k" name="budget" type="radio" className="h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-900 dark:bg-gray-500"/>
                                    <label htmlFor="400-500k" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">400 000 - 499 000 руб.</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="more-500k" name="budget" type="radio" className="h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-900 dark:bg-gray-500"/>
                                    <label htmlFor="more-500k" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">Больше 500 000 руб.</label>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className="col-span-full mt-4">
                        <label htmlFor="about" className="font-semibold block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">Детали проекта</label>
                        <div className="mt-2">
                            <textarea id="about" name="message" className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-100 dark:bg-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 dark:focus:ring-gray-100 sm:text-sm sm:leading-6"></textarea>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">Расскажите подробнее о вашем проекте</p>
                    </div>
                    <div className="mt-6 flex items-center justify-start gap-x-6">
                        <button type="submit" className="hover:animate-jump hover:animate-once hover:animate-ease-out dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-500 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  focus-visible:outline-gray-600">Отправить</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form
