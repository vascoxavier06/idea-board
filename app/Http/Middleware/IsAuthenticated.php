<?php

namespace IdeaBoard\Http\Middleware;

use Closure;
use Auth;

class IsAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(Auth::check()) {
            return redirect('/dashboard');
        }
        return $next($request);
    }
}
