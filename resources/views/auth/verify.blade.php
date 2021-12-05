@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card bg-primary">
                <div class="card-header">{{ __('Проверьте электронную почту') }}</div>

                <div class="card-body">
                    @if (session('resent'))
                        <div class="alert alert-success" role="alert">
                            {{ __('Ссылка для восстановления пароля выслана на электронную почту') }}
                        </div>
                    @endif

                    {{ __('Прежде, чем продолжить, проверье адрес электронной почты') }}
                    {{ __('Если электронное письмо не пришло') }},
                    <form class="d-inline" method="POST" action="{{ route('verification.resend') }}">
                        @csrf
                        <button type="submit" class="btn btn-link p-0 m-0 align-baseline">{{ __('нажмите, чтобы получить новое') }}</button>.
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
