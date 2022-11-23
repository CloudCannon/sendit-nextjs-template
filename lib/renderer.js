function renderComponents(content_blocks, dataBinding){
    content_blocks.map((block, index) =>{
        // const newDataBinding = 'dataBinding[index]'

        switch (block._bookshop_name) {
            case 'gallery':
                // return <Gallery ...block dataBinding={newDataBinding}>
                break;
        
            case 'columns':
                {/* <LeftColumn ...left>
                    {renderComponents(left.content_blocks)}
                </LeftColumn>
                <RightColumn ...right>
                    {renderComponents(right.content_blocks)}
                </RightColumn> */}
            default:
                return <p>Missinh component: {block._bookshop_name}</p>
                break;
        }
    })
}

export default renderComponents;