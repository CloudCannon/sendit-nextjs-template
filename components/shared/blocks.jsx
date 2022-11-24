import components from '../../components/**/*.jsx';

const getComponentKey = (name) => {
    return `../../components/${name}.jsx`;
};

function Blocks({ children, content_blocks }) {
    return <>
        {content_blocks.map((block, i) =>{
            const newDataBinding = `#content_blocks.${i}`
            const componentPath = getComponentKey(block._bookshop_name);

            const TargetComponent = Object.entries(components).filter(([k]) =>
                k.endsWith(componentPath)
            )?.[0]?.[1]?.default;

            if (!TargetComponent) {
                throw new Error(`Component not found for ${block._bookshop_name}: ${componentPath}`);
            }
            return (
                <TargetComponent block={block} dataBinding={newDataBinding} key={i}/>
            );
        })}    
    </>
}

export default Blocks;