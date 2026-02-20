import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
//import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'

import bloodtest from './bloodtest.jpg'
import urine from './urine.jpg'
import hormone from './hormonetest.jpg'
import biopsytest from './biopsytest.jpg'
import microtest from './microbiology.jpg'
import toxiologytest from './toxiology.png'
import bloodcell from './bloodcell.png'



export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const CategoryData = [
    {
        category: 'Blood Test',
        image: bloodtest,
        name: 'Blood Test'
    },
    {
        category: 'Urine Test',
        image: urine,
        name: 'Urine Tests'
    },
    {
        category: 'Hormone Test',
        image: hormone,
        name: 'Hormone Tests'
    },
    {
        category: 'Tissue Biopsy',
        image: biopsytest,
        name: 'Tissue Biopsies'
    },
    {
        category: 'Microbiology Test',
        image: microtest,
        name: 'Microbiology Tests'
    },
    {
        category: 'Toxiology Test',
        image: toxiologytest,
        name: 'Toxiology Tests'
    },
]

export const tests = [
    {
        _id: 'test1',
        name: 'Glucose Test',
        image: bloodcell,
        category: 'Blood Test',
        extra: 'No Extra Details',
        about: 'A blood sugar test measures the amount of glucose in your blood. It helps diagnose diabetes, monitor blood sugar levels, and assess how well your body processes sugar. There are different types of blood sugar tests, including fasting glucose tests, random glucose tests, and oral glucose tolerance tests.',
        fees: 1000,
        conditions: {
            line1: 'No Food for 15 Hours',
            line2: 'No Water for 15 Hours'
        }
    },
    {
        _id: 'test2',
        name: 'Protein Test',
        image: bloodcell,
        category: 'Urine Test',
        extra: 'No Extra Details',
        about: 'A urine test is a diagnostic tool used to analyze urine for signs of infections, kidney issues, diabetes, and other health conditions. It examines the urine appearance, chemical composition, and microscopic elements to detect abnormalities. ',
        fees: 400,
        conditions: {
            line1: 'No Food for 15 Hours',
            line2: 'No Water for 15 Hours'
        }
    },
    {
        _id: 'test3',
        name: 'Glucose',
        image: bloodcell,
        category: 'Blood Test',
        extra: '4 Years',
        about: 'A blood sugar test measures the amount of glucose in your blood. It helps diagnose diabetes, monitor blood sugar levels, and assess how well your body processes sugar. There are different types of blood sugar tests, including fasting glucose tests, random glucose tests, and oral glucose tolerance tests.',
        fees: 50,
        conditions: {
            line1: 'No Conditions for this test',
            line2: 'No Conditions for this test'
        }
    },
    {
        _id: 'test4',
        name: 'Glucose',
        image: bloodcell,
        category: 'Blood Test',
        extra: '4 Years',
        about: 'A blood sugar test measures the amount of glucose in your blood. It helps diagnose diabetes, monitor blood sugar levels, and assess how well your body processes sugar. There are different types of blood sugar tests, including fasting glucose tests, random glucose tests, and oral glucose tolerance tests.',
        fees: 50,
        conditions: {
            line1: 'No Food for 15 Hours',
            line2: 'No Water for 15 Hours'
        }
    },
    {
        _id: 'test5',
        name: 'Glucose',
        image: bloodcell,
        category: 'Hormone Test',
        extra: '4 Years',
        about: 'A blood sugar test measures the amount of glucose in your blood. It helps diagnose diabetes, monitor blood sugar levels, and assess how well your body processes sugar. There are different types of blood sugar tests, including fasting glucose tests, random glucose tests, and oral glucose tolerance tests.',
        fees: 50,
        conditions: {
            line1: 'No Food for 15 Hours',
            line2: 'No Water for 15 Hours'
        }
    },
    {
        _id: 'test6',
        name: 'Glucose',
        image: bloodcell,
        category: 'Microbiology Tests',
        extra: '4 Years',
        about: 'A blood sugar test measures the amount of glucose in your blood. It helps diagnose diabetes, monitor blood sugar levels, and assess how well your body processes sugar. There are different types of blood sugar tests, including fasting glucose tests, random glucose tests, and oral glucose tolerance tests.',
        fees: 50,
        conditions: {
            line1: 'No Food for 15 Hours',
            line2: 'No Water for 15 Hours'
        }
    },
    {
        _id: 'test7',
        name: 'Glucose',
        image: bloodcell,
        category: 'Microbiology Tests',
        extra: '4 Years',
        about: 'A blood sugar test measures the amount of glucose in your blood. It helps diagnose diabetes, monitor blood sugar levels, and assess how well your body processes sugar. There are different types of blood sugar tests, including fasting glucose tests, random glucose tests, and oral glucose tolerance tests.',
        fees: 50,
        conditions: {
            line1: 'No Food for 15 Hours',
            line2: 'No Water for 15 Hours'
        }
    },
    {
        _id: 'test8',
        name: 'Glucose',
        image: bloodcell,
        category: 'Blood Test',
        extra: '4 Years',
        about: 'A blood sugar test measures the amount of glucose in your blood. It helps diagnose diabetes, monitor blood sugar levels, and assess how well your body processes sugar. There are different types of blood sugar tests, including fasting glucose tests, random glucose tests, and oral glucose tolerance tests.',
        fees: 50,
        conditions: {
            line1: 'No Food for 15 Hours',
            line2: 'No Water for 15 Hours'
        }
    },
    {
        _id: 'test9',
        name: 'Glucose',
        image: bloodcell,
        category: 'Hormone Test',
        extra: '4 Years',
        about: 'A blood sugar test measures the amount of glucose in your blood. It helps diagnose diabetes, monitor blood sugar levels, and assess how well your body processes sugar. There are different types of blood sugar tests, including fasting glucose tests, random glucose tests, and oral glucose tolerance tests.',
        fees: 50,
        conditions: {
            line1: 'No Food for 15 Hours',
            line2: 'No Water for 15 Hours'
        }
    },
    {
        _id: 'test10',
        name: 'Glucose',
        image: bloodcell,
        category: 'Tissue Biopsy',
        extra: '4 Years',
        about: 'A blood sugar test measures the amount of glucose in your blood. It helps diagnose diabetes, monitor blood sugar levels, and assess how well your body processes sugar. There are different types of blood sugar tests, including fasting glucose tests, random glucose tests, and oral glucose tolerance tests.',
        fees: 50,
        conditions: {
            line1: 'No Food for 15 Hours',
            line2: 'No Water for 15 Hours'
        }
    },
    {
        _id: 'test11',
        name: 'Glucose',
        image: bloodcell,
        category: 'Tissue Biopsy',
        extra: '4 Years',
        about: 'A blood sugar test measures the amount of glucose in your blood. It helps diagnose diabetes, monitor blood sugar levels, and assess how well your body processes sugar. There are different types of blood sugar tests, including fasting glucose tests, random glucose tests, and oral glucose tolerance tests.',
        fees: 50,
        conditions: {
            line1: 'No Food for 15 Hours',
            line2: 'No Water for 15 Hours'
        }
    },
    {
        _id: 'test12',
        name: 'Glucose',
        image: bloodcell,
        category: 'Toxiology Test',
        extra: '4 Years',
        about: 'A blood sugar test measures the amount of glucose in your blood. It helps diagnose diabetes, monitor blood sugar levels, and assess how well your body processes sugar. There are different types of blood sugar tests, including fasting glucose tests, random glucose tests, and oral glucose tolerance tests.',
        fees: 50,
        conditions: {
            line1: 'No Food for 15 Hours',
            line2: 'No Water for 15 Hours'
        }
    },
    {
        _id: 'test13',
        name: 'Glucose',
        image: bloodcell,
        category: 'Toxiology Test',
        extra: '4 Years',
        about: 'A blood sugar test measures the amount of glucose in your blood. It helps diagnose diabetes, monitor blood sugar levels, and assess how well your body processes sugar. There are different types of blood sugar tests, including fasting glucose tests, random glucose tests, and oral glucose tolerance tests.',
        fees: 50,
        conditions: {
            line1: 'No Food for 15 Hours',
            line2: 'No Water for 15 Hours'
        }
    },
    {
        _id: 'test14',
        name: 'Glucose',
        image: bloodcell,
        category: 'Blood Test',
        extra: '4 Years',
        about: 'A blood sugar test measures the amount of glucose in your blood. It helps diagnose diabetes, monitor blood sugar levels, and assess how well your body processes sugar. There are different types of blood sugar tests, including fasting glucose tests, random glucose tests, and oral glucose tolerance tests.',
        fees: 50,
        conditions: {
            line1: 'No Food for 15 Hours',
            line2: 'No Water for 15 Hours'
        }
    },
    {
        _id: 'test15',
        name: 'Glucose',
        image: bloodcell,
        category: 'Toxiology Test',
        extra: '4 Years',
        about: 'A blood sugar test measures the amount of glucose in your blood. It helps diagnose diabetes, monitor blood sugar levels, and assess how well your body processes sugar. There are different types of blood sugar tests, including fasting glucose tests, random glucose tests, and oral glucose tolerance tests.',
        fees: 50,
        conditions: {
            line1: 'No Food for 15 Hours',
            line2: 'No Water for 15 Hours'
        }
    },
]
