﻿using Bmerketo_WebApp.Contexts;
using Bmerketo_WebApp.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace Bmerketo_WebApp.Services;

public class UserProfileService
{
	private readonly IdentityContext _identityContext;

	public UserProfileService(IdentityContext identityContext)
	{
		_identityContext = identityContext;
	}

	public async Task<UserProfileEntity> GetUserProfileAsync(string userId)
	{
		var userProfileEntity = await _identityContext.UserProfiles.Include(x => x.User).FirstOrDefaultAsync(x => x.UserId == userId);
		return userProfileEntity!;
	}
}
