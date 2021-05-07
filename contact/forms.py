from django import forms

# Create your forms here.


class ContactForm(forms.Form):
    name = forms.CharField(max_length=250)
    email = forms.EmailField(max_length=150)
    dayTime = forms.DateTimeField()
    numAttendees = forms.IntegerField()
    description = forms.CharField(widget=forms.Textarea, max_length=2000)
    requests = forms.CharField(widget=forms.Textarea, max_length=2000)
