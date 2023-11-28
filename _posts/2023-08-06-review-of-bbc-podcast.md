
BBC regularly produce useless nonsense on climate change. Recently, they released a podcast which aired [Fri 18 Nov 2022](https://www.bbc.co.uk/programmes/w3ct39tx). 

The titular question was:

> *__"Can a country live on renewable energy alone?"__*

If you assume the clauses with existing population and development levels, the answer is clearly no. 

However, this podcast gives the impression that it is possible. If you focus on certain given countries, it may even be true. 

I transcribed the podcast with[ openai, whisper](https://github.com/Const-me/Whisper/releases) and I highlighted all the numbers with:

```
sed -r 's/\b(\<[0-9]+\>|half|third|quarter|fifth|sixth|seventh|eighth|ninth|hundreth|thousanth|zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|thousand|million|billion|trillion)/ __\1__ /gi' TheInquiry-20221117-CanACountryLiveOnRenewableEnergyAlone.txt > TheInquiry-20221117-CanACountryLiveOnRenewableEnergyAlone.md
```

[Download the full transcript here](/assets/TheInquiry-20221117-CanACountryLiveOnRenewableEnergyAlone)

I have manually extracted all the numerical claims related directly to energy supply made during the entire podcast below. There were four experts and it ran for a duration of 23 minutes. 

### Sarah Kurtz. Professor at the University of California:

> Solar and wind energy make up a __tenth__ of all of the electricity generated around the world.
>
> We don't need to have storage until we get up into the range of something like __15__ to __25__%.
>
> Also, if we want to rely more on renewable energy, we need to build more capacity to produce it. Production capacity is currently forecast to increase by over __60__% between __2020__ and __2026__ globally.

### Halle Rundhur.  Director General of Iceland's National Energy Authority:

> Today, __nine__ out of __ten__ houses in Iceland are heated with geothermal energy.
>
> Actually over __50__ percent of newly registered cars are purely electric

### Christian Breyer. Professor for solar economy at LUT University in Finland

> In the summer in the northern hemisphere solar energy is really good during daytime the wind energy is excellent in the winter __half__ year very often __24__/ __7__ and then we have to combine both resources and then of course with the renewable energy we need flexibility in the system flexibility in demand and storage.
> 
> __80__ percent of all batteries we need as a society we will need in vehicles typically rolling on the road so for cars for trucks for buses so there we will need most of the batteries and they're very valuable because they can indirectly balance the electricity generation we call that smart charging smart ev charging. 

### Tim Buckley. Director of climate energy finance in Sydney

> Australia produces a __third__ of its electricity from renewable sources it's a country tailor-made for clean energy with more sunshine than any other continent and a long coastline ideal for offshore wind farms.
>
> I'm predicting the electricity price the wholesale price of electricity is going to drop by upwards of __50__ __60__ __70__ percent over the coming decade.
>
> When you're looking at __20__ __million__ batteries on wheels that will play a huge function in terms of absorbing excess generation every day

## My conclusion

As you can see, they provide literally no evidence for this claim. It does not review global energy consumption, it does not make efficiency assumptions, it does not look at electricity as a proportion of primary energy. It just talks to people with vested interests in maintaining the delusion that this is possible, without probing them on details.

What is the point of this exercise if not propaganda?