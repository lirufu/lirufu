export async function POST(request) {
  try {
    return new Response(JSON.stringify({ 
      html: '<div>这里应该是问答界面的HTML代码</div>'
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: '处理请求时出错' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}