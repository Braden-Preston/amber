import { db } from './firebase';

// export const getClient = async (id) => {
//     console.log(id)
//     const x = await db.collection('clients').doc(id).get()
//         .then((documentSnapshot) => {
//             console.log(documentSnapshot.data())
//         })
// }

export const getClient = async (id) => {
    console.log(id)
    return new Promise((resolve, reject) => {
        db.collection('clients').doc(id).get()
            .then((documentSnapshot) => {
                const data = documentSnapshot.data()
                data
                    ?
                    resolve(data) :
                    reject("Document Snapshot is Null")
            })
    })
}

// export const getClient = new Promise((resolve, reject) => {
//     db.collection('public').doc('wp-credentials').get()
//         .then((documentSnapshot) => {
//             const data = documentSnapshot.data()
//             data
//                 ?
//                 resolve(data) :
//                 reject("Document Snapshot is Null")
//         })
// })

// export const getClient = new Promise((resolve, reject) => {
//     db.collection('public').doc('wp-credentials').get()
//         .then((documentSnapshot) => {
//             const data = documentSnapshot.data()
//             data
//                 ?
//                 resolve(data) :
//                 reject("Document Snapshot is Null")
//         })
// })