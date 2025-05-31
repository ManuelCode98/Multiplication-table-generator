

const regularExpression = ()=>{ 

    const validateValue = '^\\d+$';
    const regexp = new RegExp( validateValue );

    return regexp;
};

export {
    regularExpression
}