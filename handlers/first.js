import palindrome from '/opt/nodejs/palindrome';

export const hello = async (event, context, cb) => {
  context.callbackWaitsForEmptyEventLoop = false;
  
  // App.handleFirst(event)  // eslint-disable-line promise/catch-or-return
  // .then(result => ({
  //   statusCode: 200,
  //   headers: {
  //     'Content-Type': 'application/json;charset=utf-8'
  //   },
  //   body: JSON.stringify(result)
  // }))
  // .asCallback(cb);

  return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ data: palindrome('Hello World...') })
    }
};
