import s from './SearchBar.module.css';
import { FiSearch } from "react-icons/fi";
import toast, { Toaster } from 'react-hot-toast';
import { FaInfoCircle } from "react-icons/fa";
import { Formik, Form, Field } from 'formik';

export default function SearchBar({onSubmit}) {
    const initialValues = {
        q: '',
    }
    const handleSubmit = (values) => {
        if (values.q.trim() === '') {
            toast.error('Please, enter something', {
                icon: <FaInfoCircle size={24} />,
                duration: 3000,
            })
            return
        }
        console.log(values.q)
        onSubmit(values.q.toLowerCase())

    }
    return (
        <div>  
            <Toaster/>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={s.form}>
                <Field name='q' placeholder='Search...' className={s.input}></Field>
                <button type='submit' className={s.btn}><FiSearch size={24}/></button>
            </Form>
            </Formik>
            </div>
    )
}