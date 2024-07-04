/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = '¡Bienvenido a la guía de la ciudad! ¿Sobre qué tema te gustaría saber más?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};



const descriptionDatasource = {
    "videoPlayerTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://www.informador.mx/__export/1656225265305/sites/elinformador/img/2022/06/26/imagen_imagen_monterrey-555080_cmyk_crop1656225244800.jpg_788543494.jpg",
            "displayFullscreen": false,
            "headerTitle": "How to care for potted plants",
            "headerSubtitle": "",
            "videoControlType": "skip",
            "videoSources": [
                "https://joji2.s3.us-east-2.amazonaws.com/vMe.mp4",
            ],
            "sliderType": "determinate"
        }
    }
};

const DescriptionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DescriptionIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Aquí tienes una descripción de la ciudad.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                token: 'DescriptionToken',
                document: {
                    src: 'doc://alexa/apl/documents/DescriptionAPL',
                    type: 'Link'
                },
                datasources: descriptionDatasource
            })
            .getResponse();
    }
};

const touristPlacesDatasource = {
    "cardsLayoutTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-leaf-2.png",
            "headerTitle": "Lugares Turísticos",
            "headerSubtitle": "Descubre los mejores lugares para visitar",
            "headerAttributionImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/logo-world-of-plants-2.png",
            "primaryText": "¿Qué lugar turístico te gustaría conocer más?",
            "listItems": [
                 {
                    "primaryText": "City Tour Nocturno ",
                    "secondaryText": "Con guia, traslado y entradas",
                    "thumbnailImage": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/12/4b/a6/5f.jpg"
                },
                {
                    "primaryText": " Grutas de García",
                    "thumbnailImage": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/46/bd/32.jpg"
                },
                {
                    "primaryText": "Cascadas Cola de Caballo",
                    "secondaryText": "Con guia, traslado y entradas",
                    "thumbnailImage": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/10/30/9c/11.jpg"
                },
                {
                    "primaryText": "Descubre lo mejor de Monterrey",
                    "secondaryText": "Con guia, traslado y entradas",
                    "thumbnailImage": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/10/2c/83/c6.jpg"
                },
                {
                    "primaryText": "Cola de Caballo desde Monterrey",
                    "thumbnailImage": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0f/99/66/27.jpg"
                },
                {
                    "primaryText": "Parque de las Cataratas",
                    "thumbnailImage": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/8d/52/09.jpg"
                }
            ]
        }
    }
};

const TouristPlacesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TouristPlacesIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Estos son algunos lugares turísticos importantes.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                token: 'TouristPlacesToken',
                document: {
                    src: 'doc://alexa/apl/documents/LugaresAPL',
                    type: 'Link'
                },
                datasources: touristPlacesDatasource
            })
            .getResponse();
    }
};

const DOCUMENT_ID = "ComidaAPL";

const datasource = {
    "imageListData": {
        "type": "object",
        "objectId": "imageListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
             "sources": [
                {
                    "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                    "size": "large"
                }
            ]
        },
        "title": "Comida típica",
        "listItems": [
            {
                "primaryText": "Carne asada",
                "imageSource": "https://traveler.marriott.com/es/wp-content/uploads/sites/2/2019/09/GI-674664254_CarneAsada.jpg"
            },
            {
                "primaryText": "Paleta de cabrito al pastor",
                "imageSource": "https://media-cdn.tripadvisor.com/media/photo-s/0d/69/54/de/paleta-de-cabrito.jpg"
            },
            {
                "primaryText": "CABRITO",
                "imageSource": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Cabrito_-_Monterrey.JPG/1200px-Cabrito_-_Monterrey.JPG"
            },
            {
                "primaryText": "Cabrito en salsa",
                "imageSource": "https://i.ytimg.com/vi/zMSy3EekgsY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAGWNKh49c3dAA7gHi69jWapITD8A"
            },
            {
                "primaryText": "Machitos",
                "imageSource": "https://laroussecocina.mx/wp-content/uploads/2018/05/Machito-de-cabrito-estilo-norteno.jpg"
            },
            {
                "primaryText": "SALSA MOLCAJETEADA",
                "imageSource": "https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/22de08e32af6b738f50dd9f55302dfe5.jpeg?itok=i68uHgMl"
            }
        ],
        "logoUrl": "https://example.com/images/logo.png",
        "hintText": "Prueba diciendo, \"Alexa, selecciona número 1\""
    }
};

const TypicalFoodIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TypicalFoodIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Aquí tienes información sobre la comida típica.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                token: 'TypicalFoodToken',
                document: {
                    src: 'doc://alexa/apl/documents/ComidaAPL',
                    type: 'Link'
                },
                datasources: datasource
            })
            .getResponse();
    }
};


const DOCUMENT_ID_TRAJE = "TrajeAPL";

const datasourceTraje = {
    "imageListData": {
        "type": "object",
        "objectId": "imageListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                    "size": "large"
                }
            ]
        },
        "title": "Traje típico",
        "listItems": [
            {
                "primaryText": "indumentaria regional",
                "imageSource": "https://ginobogani.com.ar/wp-content/uploads/cual-es-la-vestimenta-de-aguascalientes.webp"
            },
            {
                "primaryText": "apaches",
                "imageSource": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpIGSQLx7j991TtjMZcKEXqcWC3YEtNVIocxxPjMqbHDCvrb9ZBWwwy0V4Ck5Okm2AWoK1efB8e0MrK6Kzo2cbtEDO1fNJyBIYIJDMn_Nf3Q2mRZo3GOxVWaumRrPmROWXa41gAucHB3s/s320/Traje+tipico+regional+monterrey.jpg"
            }
        ],
        "logoUrl": "https://example.com/images/logo.png",
        "hintText": "Prueba diciendo, \"Alexa, selecciona número 1\""
    }
};

const TypicalClothingIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TypicalClothingIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Aquí tienes información sobre el traje típico.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                token: 'TypicalClothingToken',
                document: {
                    src: 'doc://alexa/apl/documents/TrajeAPL',
                    type: 'Link'
                },
                datasources: datasourceTraje
            })
            .getResponse();
    }
};

const DOCUMENT_ID_PERSONAJES = "PersonajesAPL";


const datasourcePersonajes = {
    "imageListData": {
        "type": "object",
        "objectId": "imageListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                    "size": "large"
                }
            ]
        },
        "title": "Personajes sobresalientes",
        "listItems": [
            {
                "primaryText": "RAÚL RANGEL FRÍAS",
                "imageSource": "https://vidauniversitaria.uanl.mx/wp-content/uploads/2023/03/raul-rangel-frias-uanl.jpg"
            },
            {
                "primaryText": "FRANCISCO CERDA MUÑOZ",
                "imageSource": "https://cienciauanl.uanl.mx/wp-content/uploads/2017/06/premio_periodismo_b.jpg"
            },
            {
                "primaryText": "EDUARDO AGUIRRE PEQUEÑO",
                "imageSource": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2JP3GE2iMqpulrFmbMpJ3Cyaejsw7WuBF5Q&s"
            }
        ],
        "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png",
        "hintText": "Prueba diciendo, \"Alexa, selecciona número 1\""
    }
};

const NotablePeopleIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'NotablePeopleIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Aquí tienes información sobre personajes sobresalientes.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                token: 'NotablePeopleToken',
                document: {
                    src: 'doc://alexa/apl/documents/PersonajesAPL',
                    type: 'Link'
                },
                datasources: datasourcePersonajes
            })
            .getResponse();
    }
};

const DOCUMENT_ID_MUSICA = "MusicaAPL";

const datasourceMusica = {
    "audioPlayerTemplateData": {
        "type": "object",
        "properties": {
            "audioControlType": "jump30",
            "audioSources": [
                "https://joji2.s3.us-east-2.amazonaws.com/msMex.mp3"
            ],
            "backgroundImage": "https://i.ytimg.com/vi/0VtuorB5hNU/maxresdefault.jpg",
            "coverImageSource": "https://i.ytimg.com/vi/BZkOt-8nWRo/maxresdefault.jpg",
            "headerTitle": "El Trono de México - Te Ves Fatal",
            "logoUrl": "",
            "primaryText": "Te Ves Fatal",
            "secondaryText": "My favourite album",
            "sliderType": "determinate"
        }
    }
};

const MusicIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MusicIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Aquí tienes una muestra de la música local.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                token: 'MusicToken',
                document: {
                    src: 'doc://alexa/apl/documents/MusicaAPL',
                    type: 'Link'
                },
                datasources: datasourceMusica
            })
            .getResponse();
    }
};




const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        DescriptionIntentHandler,
        TouristPlacesIntentHandler,
        TypicalFoodIntentHandler,
        TypicalClothingIntentHandler,
        NotablePeopleIntentHandler,
        MusicIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();