import React from 'react'
import Child from './Child'

const Parent = () => {
    return (
        <div>
            <Child name="Kavya" age={18}
                mark={[99, 96, 97, 100, 98]}
                person={{ name: "Kavya", dept: ["BSc CT"]}}/>
        </div>
    )
}

export default Parent