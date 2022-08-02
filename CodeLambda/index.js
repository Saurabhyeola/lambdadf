const fileProcessingService = require('./file-processing-service');
const util = require(' ./util');
const fileUploadPath = '/file-upload';

exports.handler = async (event) => {
    console.log('Request Event: ', event);
    let repsonse;
    switch(true) {
        case event.httpMethod === 'POST' && event.path === fileUploadPath:
            repsonse = await fileProcessingService.process(event.body);
            break;
        default:
            repsonse = util.buildResponse(404);
    }
    return repsonse;
    
    
};
