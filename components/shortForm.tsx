'use client'
import styles from '@/components/styles.module.css';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import InputMask from "react-input-mask";
import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild, Field, Input, Label} from '@headlessui/react'
import { useState } from 'react'
import clsx from 'clsx'

const ShortForm = () => {
    const [result, setResult] = React.useState("");

    let [isOpen, setIsOpen] = useState(false);

    function open() {
      setIsOpen(true)
    }
  
    function close() {
      setIsOpen(false)
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "c4f28ec9-a849-4567-aac2-803e3e57cda2");

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
        <>
            <Transition appear show={isOpen}>
            <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <TransitionChild
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 transform-[scale(95%)]"
                            enterTo="opacity-100 transform-[scale(100%)]"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 transform-[scale(100%)]"
                            leaveTo="opacity-0 transform-[scale(95%)]"
                        >
                            <DialogPanel className="w-full max-w-md rounded-xl bg-gray-200/75 dark:bg-gray-800/75 dark:text-gray-100 p-6 backdrop-blur-xl">
                                <DialogTitle as="h3" className="text-xl font-medium text-gray-900 dark:text-gray-100">
                                    Пожалуйста, оставьте свои контактные данные
                                </DialogTitle>
                                <form className={styles.form} onSubmit={onSubmit}>
                                    <div className={"space-y-12 ml-0"}>
                                        <div className="pb-2">
                                            <div className="mt-2 grid grid-cols-1 gap-y-4">
                                                <div className="sm:col-span-3">
                                                    <label htmlFor="name" className="block text-sm font-base leading-6 text-gray-900 dark:text-gray-100">Ваше имя</label>
                                                    <div className="mt-2">
                                                        <input required type="text" name="name" id="name" placeholder="Иван" autoComplete="name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:placeholder:text-gray-600 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-900 dark:focus:ring-gray-100 sm:text-sm sm:leading-6 dark:bg-gray-300 bg-gray-300 dark:text-gray-900"/>
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <label htmlFor="price" className="block text-sm font-base leading-6 text-gray-900 dark:text-gray-100">Номер телефона</label>
                                                    <div className="relative mt-2 rounded-md shadow-sm">
                                                        <InputMask mask="+7 (999) 999-99-99" required autoComplete='phone' type="text" name="phone" id="phone" className="block w-full rounded-md border-0 py-1.5  pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 dark:placeholder:text-gray-600 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-900 dark:focus:ring-gray-100 sm:text-sm sm:leading-6 dark:bg-gray-300 bg-gray-300 dark:text-gray-900" placeholder="+7 (999) 999-99-99"/>
                                                        <div className="absolute inset-y-0 right-0 flex items-center"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-6 flex items-center justify-start gap-x-6">
                                                <button type="submit" className="hover:animate-jump hover:animate-once hover:animate-ease-out rounded-md bg-gray-900 dark:bg-gray-300 px-3 py-2 text-sm font-semibold text-gray-100 dark:text-gray-900 shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  focus-visible:outline-gray-600">Отправить</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
            </Transition>
            <button onClick={open} className='hover:animate-jump hover:animate-once hover:animate-ease-out dark:bg-gray-100 dark:text-gray-900 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 w-36 flex justify-center text-center'>
                                Заказать
            </button>
        </>
        
        
    )
}

export default ShortForm
