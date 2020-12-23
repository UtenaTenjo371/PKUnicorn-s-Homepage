from django.db import models
#Note
class Document(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('title',)
#To do list
class Task(models.Model):
	title = models.CharField(max_length=50)
	complete = models.BooleanField(default=False)
	created = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.title