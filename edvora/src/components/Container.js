import React,{useEffect,useState} from 'react';
import '../css/container.css'
const Container = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        const getProducts = async() => {
            // const res = await fetch('https://newsapi.org/v2/top-headlines?apiKey=f689852284a84d42ae0ee17cc3d7f0a0')
            const res = await fetch('https://assessment-edvora.herokuapp.com/')

            const data = await res.json();
            console.log(data)
            return data
        }
        getProducts().then(data => setProducts(data))
        .catch(err => console.log(err));
    },[])   
                return (
                    <>
                    <div>
                        <h5>Product Name</h5>
                    <hr />
                    
                        
                        <div className='container'>
                        {products.map((elem) => {
                            <>
                            <div className='product-container-div'>
                                {elem.product_name}
                                </div>
                            </>
                            })}
                        
                    </div>
                    
                    
                </div>
                </>
                )
                
            
};
    

export default Container;
