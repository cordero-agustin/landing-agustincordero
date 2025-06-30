import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { BeatLoader } from 'react-spinners'

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState(null)
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)
      try {
        const docRef = doc(db, 'productos', itemId)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setDetail({ id: docSnap.id, ...docSnap.data() })
        } else {
          console.warn('Producto no encontrado.')
          setDetail(null)
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [itemId])

  return (
    <div>
      {loading ? <BeatLoader /> : detail ? <ItemDetail detail={detail} /> : <p>Producto no encontrado.</p>}
    </div>
  )
}

export default ItemDetailContainer
