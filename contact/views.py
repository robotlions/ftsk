from django.shortcuts import render, redirect
from .forms import ContactForm
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse


# Create your views here.
# def homepage(request):
# 	return render(request, "main/home.html")

def contact(request):
	if request.method == 'POST':
		form = ContactForm(request.POST)
		if form.is_valid():
			subject = "Catering Request" 
			body = {
			'name': form.cleaned_data['name'], 
			'dayTime': form.cleaned_data['dayTime'], 
			'email': form.cleaned_data['email'], 
			'description':form.cleaned_data['description'],
            'numAttendees': form.cleaned_data['numAttendees'],
            'requests': form.cleaned_data['requests'], 
			}
			message = "\n".join(body.values())

			try:
				send_mail(subject, message, 'admin@example.com', ['admin@example.com']) 
			except BadHeaderError:
				return HttpResponse('Invalid header found.')
			return redirect ("main:homepage")
      
	form = ContactForm()
	return render(request, "main/contact.html", {'form':form})
# Create your views here.
